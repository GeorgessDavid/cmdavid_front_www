'use client';

import { useState, useEffect } from "react";
import { API_URL } from "@/constants";

interface Review {
    id: number;
    rating: number;
    text: string;
    author: string;
    profilePhotoUrl: string;
    relativePublishTimeDescription: string;
}   

const useReviews = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            const response = await fetch(`${API_URL}/public/reviews`);
            if (response.status === 200) {
                const data = await response.json();
                console.log(data);
                setReviews(data.reviews);
            }
            setLoading(false);
        };
        fetchReviews();
    }, []);

    return { reviews, loading };
}

export default useReviews;