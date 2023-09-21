import { configureStore } from '@reduxjs/toolkit';
import { activitiesReducer } from './slices/activities';
import { authReducer } from './slices/auth';

const store = configureStore({
    reducer: {
        activities: activitiesReducer,
        auth: authReducer,
    }
});

export default store;