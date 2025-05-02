
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
  console.log("Submitting review to Supabase:", review);
  
  try {
    const { data, error } = await supabase
      .from('reviews')
      .insert([{ 
        name: review.name, 
        review: review.review, 
        rating: review.rating,
        date: new Date().toISOString()
      }])
      .select();
      
    if (error) {
      console.error("Error submitting review:", error);
      throw error;
    }
    
    console.log("Review submitted successfully:", data);
    return data;
  } catch (err) {
    console.error("Exception in submitReview:", err);
    throw err;
  }
};

export const getReviews = async () => {
  console.log("Fetching reviews from Supabase");
  
  try {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .eq('approved', true)
      .order('date', { ascending: false });
      
    if (error) {
      console.error("Error fetching reviews:", error);
      throw error;
    }
    
    console.log("Reviews fetched successfully:", data);
    return data || [];
  } catch (err) {
    console.error("Exception in getReviews:", err);
    throw err;
  }
};
