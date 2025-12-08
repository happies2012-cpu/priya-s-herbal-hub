import { useState } from "react";
import { Link } from "react-router-dom";
import { Calculator, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface BMIResult {
  bmi: number;
  category: string;
  color: string;
  recommendation: string;
  products: { name: string; slug: string }[];
}

const BMICalculator = () => {
  const [gender, setGender] = useState("female");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<BMIResult | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const heightM = parseFloat(height) / 100;
    const weightKg = parseFloat(weight);
    const bmi = weightKg / (heightM * heightM);

    let category: string;
    let color: string;
    let recommendation: string;
    let products: { name: string; slug: string }[] = [];

    if (bmi < 18.5) {
      category = "Underweight";
      color = "text-blue-500";
      recommendation = "Focus on healthy weight gain with protein-rich nutrition.";
      products = [
        { name: "Protein Drink Mix", slug: "protein-drink-mix-vanilla" },
        { name: "Formula 1 Shake", slug: "formula-1-shake-vanilla" }
      ];
    } else if (bmi < 25) {
      category = "Normal";
      color = "text-green-500";
      recommendation = "Maintain your healthy weight with balanced nutrition.";
      products = [
        { name: "Multivitamin Complex", slug: "formula-2-multivitamin" },
        { name: "Herbal Tea", slug: "herbal-tea-concentrate-lemon" }
      ];
    } else if (bmi < 30) {
      category = "Overweight";
      color = "text-yellow-500";
      recommendation = "Start your weight management journey with meal replacements.";
      products = [
        { name: "Formula 1 Shake", slug: "formula-1-shake-vanilla" },
        { name: "Total Control", slug: "total-control" },
        { name: "Herbal Tea", slug: "herbal-tea-concentrate-lemon" }
      ];
    } else {
      category = "Obese";
      color = "text-red-500";
      recommendation = "Consider a comprehensive weight management program.";
      products = [
        { name: "Formula 1 Shake", slug: "formula-1-shake-vanilla" },
        { name: "Total Control", slug: "total-control" },
        { name: "Cell-U-Loss", slug: "cell-u-loss" },
        { name: "Active Fiber", slug: "active-fiber-complex" }
      ];
    }

    setResult({ bmi, category, color, recommendation, products });
  };

  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-6 h-6 text-primary" />
          BMI Calculator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={calculateBMI} className="space-y-6">
          <div>
            <Label>Gender</Label>
            <RadioGroup value={gender} onValueChange={setGender} className="flex gap-4 mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female" className="cursor-pointer">Female</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male" className="cursor-pointer">Male</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="age">Age (years)</Label>
              <Input
                id="age"
                type="number"
                required
                min="10"
                max="100"
                value={age}
                onChange={e => setAge(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="height">Height (cm)</Label>
              <Input
                id="height"
                type="number"
                required
                min="100"
                max="250"
                value={height}
                onChange={e => setHeight(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input
                id="weight"
                type="number"
                required
                min="30"
                max="300"
                value={weight}
                onChange={e => setWeight(e.target.value)}
              />
            </div>
          </div>

          <Button type="submit" className="w-full">Calculate BMI</Button>
        </form>

        {result && (
          <div className="mt-8 p-6 bg-muted rounded-xl animate-fade-in">
            <div className="text-center mb-6">
              <p className="text-sm text-muted-foreground mb-1">Your BMI</p>
              <p className={`text-5xl font-bold ${result.color}`}>{result.bmi.toFixed(1)}</p>
              <p className={`text-xl font-semibold ${result.color}`}>{result.category}</p>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">{result.recommendation}</p>

              <div>
                <p className="font-semibold mb-2">Recommended Products:</p>
                <div className="flex flex-wrap gap-2">
                  {result.products.map(product => (
                    <Button key={product.slug} variant="outline" size="sm" asChild>
                      <Link to={`/products/${product.slug}`}>
                        {product.name} <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>

              <Button asChild className="w-full mt-4">
                <Link to="/goals/weight">Start Your Weight Loss Journey</Link>
              </Button>
            </div>
          </div>
        )}

        <div className="mt-6 text-xs text-muted-foreground">
          <p><strong>BMI Categories:</strong></p>
          <ul className="mt-1 space-y-1">
            <li>Underweight: &lt; 18.5</li>
            <li>Normal: 18.5 - 24.9</li>
            <li>Overweight: 25 - 29.9</li>
            <li>Obese: ≥ 30</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default BMICalculator;
