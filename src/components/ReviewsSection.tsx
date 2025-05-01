
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, StarHalf, StarOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Sample reviews data
const initialReviews = [
  {
    id: 1,
    name: "Alex Thompson",
    review: "Working with Debuglopers was a game-changer for our business. Their technical expertise and creative approach delivered a product that exceeded our expectations.",
    rating: 5,
    date: "2025-04-15"
  },
  {
    id: 2,
    name: "Sarah Chen",
    review: "The dashboard they built for us has streamlined our operations and provided invaluable insights. Highly professional team with exceptional communication.",
    rating: 4.5,
    date: "2025-03-22"
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    review: "Their AI solution saved us countless hours of manual work. The attention to detail and user experience design sets them apart from other agencies.",
    rating: 5,
    date: "2025-02-10"
  }
];

const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !reviewText) {
      toast({
        title: "Error",
        description: "Please provide your name and review.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real application, this would send data to Supabase or another backend
    const newReview = {
      id: reviews.length + 1,
      name,
      review: reviewText,
      rating,
      date: new Date().toISOString().split("T")[0]
    };
    
    setReviews([newReview, ...reviews]);
    setName("");
    setReviewText("");
    setRating(5);
    
    toast({
      title: "Thank you for your review!",
      description: "Your feedback has been submitted successfully.",
    });
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} size={16} className="text-neon" fill="#c2ff00" />);
      } else if (hasHalfStar && i === fullStars + 1) {
        stars.push(<StarHalf key={i} size={16} className="text-neon" fill="#c2ff00" />);
      } else {
        stars.push(<StarOff key={i} size={16} className="text-gray-500" />);
      }
    }
    
    return stars;
  };

  const renderRatingInput = () => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setRating(value)}
            onMouseEnter={() => setHoveredRating(value)}
            onMouseLeave={() => setHoveredRating(0)}
            className="focus:outline-none"
            aria-label={`Rate ${value} stars`}
          >
            <Star
              size={24}
              className={`${
                (hoveredRating || rating) >= value ? "text-neon" : "text-gray-500"
              }`}
              fill={(hoveredRating || rating) >= value ? "#c2ff00" : "none"}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="section-padding bg-gradient-to-b from-black to-jet">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="text-neon glow-text">Reviews</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from clients who have experienced the Debuglopers difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Review Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glow-card p-6"
          >
            <h3 className="text-xl font-bold mb-4">Leave a Review</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-neon focus:border-transparent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-gray-300 mb-1">
                  Rating
                </label>
                {renderRatingInput()}
              </div>
              
              <div>
                <label htmlFor="review" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Review
                </label>
                <textarea
                  id="review"
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  rows={4}
                  className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-neon focus:border-transparent transition-colors resize-none"
                  placeholder="Share your experience working with us..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full neon-button"
              >
                Submit Review
              </button>
            </form>
          </motion.div>

          {/* Reviews Display */}
          <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glow-card p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center mb-1">
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm font-medium mr-3">
                        {review.name.slice(0, 1)}
                      </div>
                      <h4 className="font-medium">{review.name}</h4>
                    </div>
                    <div className="flex">{renderStars(review.rating)}</div>
                  </div>
                  <span className="text-xs text-gray-400">{review.date}</span>
                </div>
                <p className="text-gray-300 text-sm">{review.review}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
