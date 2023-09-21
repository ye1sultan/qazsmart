import { configureStore } from '@reduxjs/toolkit';
import { activitiesReducer } from './slices/activities';
import { reviewsReducer } from './slices/reviews';
import { authReducer } from './slices/auth';

const store = configureStore({
    reducer: {
        activities: activitiesReducer,
        reviews: reviewsReducer,
        auth: authReducer,
    }
});

export default store;