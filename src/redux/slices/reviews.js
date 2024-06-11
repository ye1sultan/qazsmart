import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import { reviews as sampleReviews } from "../../sample/data";

export const fetchReviews = createAsyncThunk('reviews/fetchReviews', async () => {
    try {
        const { data } = await axios.get('/reviews');
        return data;
    } catch (error) {
        console.error("Failed to fetch reviews from server. Using sample data instead.", error);
        return sampleReviews;
    }
});

export const fetchRemoveReviews = createAsyncThunk('reviews/fetchRemoveReviews', async (id) => {
    axios.delete(`/reviews/${id}`);
});

const initialState = {
    reviews: {
        items: [],
        status: 'loading'
    }
};

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReviews.pending, (state) => {
                state.reviews.items = [];
                state.reviews.status = 'loading';
            })
            .addCase(fetchReviews.fulfilled, (state, action) => {
                state.reviews.items = action.payload;
                state.reviews.status = 'loaded';
            })
            .addCase(fetchReviews.rejected, (state) => {
                state.reviews.items = [];
                state.reviews.status = 'error';
            })
            .addCase(fetchRemoveReviews.pending, (state, action) => {
                state.reviews.items = state.reviews.items.filter(obj => obj._id !== action.meta.arg);
            });
    }
});

export const reviewsReducer = reviewsSlice.reducer;
