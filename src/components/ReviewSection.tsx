import { useState } from "react";
import { Star, ThumbsUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useReviews } from "@/contexts/ReviewContext";

interface ReviewSectionProps {
  productId: string;
  productRating: number;
  reviewCount: number;
}

const ReviewSection = ({ productId, productRating, reviewCount }: ReviewSectionProps) => {
  const { getProductReviews, addReview, markHelpful } = useReviews();
  const reviews = getProductReviews(productId);
  
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    userName: "",
    rating: 5,
    title: "",
    comment: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addReview({
      ...newReview,
      productId,
      verified: true
    });
    setNewReview({ userName: "", rating: 5, title: "", comment: "" });
    setShowForm(false);
  };

  const ratingDistribution = [5, 4, 3, 2, 1].map(stars => ({
    stars,
    count: reviews.filter(r => r.rating === stars).length,
    percentage: reviews.length ? (reviews.filter(r => r.rating === stars).length / reviews.length) * 100 : 0
  }));

  return (
    <div className="space-y-8">
      {/* Rating Summary */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Customer Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl font-bold text-primary">{productRating.toFixed(1)}</div>
              <div>
                <div className="flex gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i <= Math.round(productRating) ? "fill-primary text-primary" : "text-muted"}`}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Based on {reviewCount} reviews</p>
              </div>
            </div>
            <div className="space-y-2">
              {ratingDistribution.map(({ stars, count, percentage }) => (
                <div key={stars} className="flex items-center gap-3">
                  <span className="text-sm w-12">{stars} star</span>
                  <Progress value={percentage} className="flex-1 h-2" />
                  <span className="text-sm text-muted-foreground w-8">{count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Write a Review</CardTitle>
          </CardHeader>
          <CardContent>
            {!showForm ? (
              <div className="text-center py-4">
                <p className="text-muted-foreground mb-4">Share your experience with this product</p>
                <Button onClick={() => setShowForm(true)}>Write Review</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label>Your Name</Label>
                  <Input
                    required
                    value={newReview.userName}
                    onChange={e => setNewReview({ ...newReview, userName: e.target.value })}
                  />
                </div>
                <div>
                  <Label>Rating</Label>
                  <div className="flex gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map(i => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setNewReview({ ...newReview, rating: i })}
                      >
                        <Star
                          className={`w-6 h-6 cursor-pointer transition-colors ${
                            i <= newReview.rating ? "fill-primary text-primary" : "text-muted hover:text-primary"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <Label>Review Title</Label>
                  <Input
                    required
                    value={newReview.title}
                    onChange={e => setNewReview({ ...newReview, title: e.target.value })}
                  />
                </div>
                <div>
                  <Label>Your Review</Label>
                  <Textarea
                    required
                    rows={4}
                    value={newReview.comment}
                    onChange={e => setNewReview({ ...newReview, comment: e.target.value })}
                  />
                </div>
                <div className="flex gap-2">
                  <Button type="submit">Submit Review</Button>
                  <Button type="button" variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">All Reviews ({reviews.length})</h3>
        {reviews.length === 0 ? (
          <p className="text-muted-foreground">No reviews yet. Be the first to review!</p>
        ) : (
          reviews.map(review => (
            <Card key={review.id}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold">{review.userName}</span>
                      {review.verified && (
                        <span className="flex items-center gap-1 text-xs text-primary">
                          <CheckCircle className="w-3 h-3" /> Verified Purchase
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map(i => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i <= review.rating ? "fill-primary text-primary" : "text-muted"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                  </div>
                </div>
                <h4 className="font-medium mb-2">{review.title}</h4>
                <p className="text-muted-foreground mb-4">{review.comment}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => markHelpful(review.id)}
                  className="text-muted-foreground"
                >
                  <ThumbsUp className="w-4 h-4 mr-1" /> Helpful ({review.helpful})
                </Button>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
