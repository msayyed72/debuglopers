
import { supabase } from "@/integrations/supabase/client";

export type Review = {
  id?: string;
  name: string;
  review: string;
  rating: number;
  date?: string;
  approved?: boolean;
};

export const submitReview = async (review: Omit<Review, 'id' | 'date' | 'approved'>) => {
  const { data, error } = await supabase
    .from('reviews')
    .insert([{ 
      name: review.name, 
      review: review.review, 
      rating: review.rating 
    }])
    .select();
    
  if (error) {
    console.error("Error submitting review:", error);
    throw error;
  }
  
  return data;
};

export const getReviews = async () => {
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .eq('approved', true)
    .order('date', { ascending: false });
    
  if (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
  
  return data || [];
};
