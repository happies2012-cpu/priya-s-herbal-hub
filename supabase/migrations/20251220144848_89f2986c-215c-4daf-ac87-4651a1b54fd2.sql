-- Create role enum
create type public.app_role as enum ('super_admin', 'admin', 'user');

-- Create profiles table
create table public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null unique,
  email text,
  full_name text,
  phone text,
  avatar_url text,
  created_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone default now() not null
);

-- Create user_roles table (separate from profiles for security)
create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role app_role not null default 'user',
  unique (user_id, role)
);

-- Create products table
create table public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text,
  short_description text,
  price numeric(10,2) not null,
  original_price numeric(10,2),
  image text,
  images text[] default '{}',
  category text,
  goal text,
  product_type text,
  rating numeric(2,1) default 0,
  reviews_count integer default 0,
  stock integer default 100,
  is_active boolean default true,
  nutrition_facts jsonb,
  benefits text[] default '{}',
  created_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone default now() not null
);

-- Create orders table
create table public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  order_number text unique not null,
  status text default 'pending' not null,
  total_amount numeric(10,2) not null,
  shipping_address jsonb,
  payment_method text,
  payment_status text default 'pending',
  razorpay_order_id text,
  razorpay_payment_id text,
  items jsonb not null,
  created_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone default now() not null
);

-- Create reviews table
create table public.reviews (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references public.products(id) on delete cascade not null,
  user_id uuid references auth.users(id) on delete set null,
  user_name text not null,
  rating integer check (rating >= 1 and rating <= 5) not null,
  comment text,
  is_approved boolean default false,
  created_at timestamp with time zone default now() not null
);

-- Enable RLS on all tables
alter table public.profiles enable row level security;
alter table public.user_roles enable row level security;
alter table public.products enable row level security;
alter table public.orders enable row level security;
alter table public.reviews enable row level security;

-- Security definer function to check roles (prevents recursive RLS)
create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = _user_id
      and role = _role
  )
$$;

-- Function to check if user is admin or super_admin
create or replace function public.is_admin(_user_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = _user_id
      and role in ('admin', 'super_admin')
  )
$$;

-- Profiles policies
create policy "Users can view own profile" on public.profiles
  for select using (auth.uid() = user_id);

create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = user_id);

create policy "Admins can view all profiles" on public.profiles
  for select using (public.is_admin(auth.uid()));

-- User roles policies
create policy "Users can view own roles" on public.user_roles
  for select using (auth.uid() = user_id);

create policy "Admins can view all roles" on public.user_roles
  for select using (public.is_admin(auth.uid()));

create policy "Super admins can manage roles" on public.user_roles
  for all using (public.has_role(auth.uid(), 'super_admin'));

-- Products policies (public read, admin write)
create policy "Anyone can view active products" on public.products
  for select using (is_active = true);

create policy "Admins can view all products" on public.products
  for select using (public.is_admin(auth.uid()));

create policy "Admins can manage products" on public.products
  for all using (public.is_admin(auth.uid()));

-- Orders policies
create policy "Users can view own orders" on public.orders
  for select using (auth.uid() = user_id);

create policy "Users can create own orders" on public.orders
  for insert with check (auth.uid() = user_id);

create policy "Admins can view all orders" on public.orders
  for select using (public.is_admin(auth.uid()));

create policy "Admins can update orders" on public.orders
  for update using (public.is_admin(auth.uid()));

-- Reviews policies
create policy "Anyone can view approved reviews" on public.reviews
  for select using (is_approved = true);

create policy "Users can create reviews" on public.reviews
  for insert with check (auth.uid() = user_id);

create policy "Admins can manage reviews" on public.reviews
  for all using (public.is_admin(auth.uid()));

-- Function to handle new user signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  -- Create profile
  insert into public.profiles (user_id, email, full_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.email)
  );
  
  -- Assign default user role
  insert into public.user_roles (user_id, role)
  values (new.id, 'user');
  
  -- Auto-assign super_admin to specific email
  if new.email = 'pranu21m@gmail.com' then
    insert into public.user_roles (user_id, role)
    values (new.id, 'super_admin')
    on conflict (user_id, role) do nothing;
  end if;
  
  return new;
end;
$$;

-- Trigger for new user signup
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Function to update timestamps
create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql set search_path = public;

-- Triggers for updated_at
create trigger update_profiles_updated_at
  before update on public.profiles
  for each row execute function public.update_updated_at_column();

create trigger update_products_updated_at
  before update on public.products
  for each row execute function public.update_updated_at_column();

create trigger update_orders_updated_at
  before update on public.orders
  for each row execute function public.update_updated_at_column();