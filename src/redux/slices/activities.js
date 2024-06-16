import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import { activities as sampleActivities } from "../../sample/data";

export const fetchActivities = createAsyncThunk('activities/fetchActivities', async () => {
    try {
        const { data } = await axios.get('/activities');
        return data;
    } catch (error) {
        console.error("Failed to fetch activities from server. Using sample data instead.", error);
        return sampleActivities;
    }
});

export const fetchActivityById = createAsyncThunk('activities/fetchActivityById', async (id) => {
    try {
        const { data } = await axios.get(`/activities/${id}`);
        return data;
    } catch (error) {
        console.error("Failed to fetch the activity from the server. Using sample data instead.", error);
        const sampleActivity = sampleActivities.find(activity => activity._id === id);
        return sampleActivity || null;
    }
});

export const fetchRemoveActivities = createAsyncThunk('activities/fetchRemoveActivities', async (id) => {
    axios.delete(`/activities/${id}`);
});

const initialState = {
    activities: {
        items: [],
        status: 'loading',
    },
    selectedActivity: {
        item: null,
        status: 'idle',
    },
};

const activitiesSlice = createSlice({
    name: 'activities',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Handle fetchActivities
            .addCase(fetchActivities.pending, (state) => {
                state.activities.items = [];
                state.activities.status = 'loading';
            })
            .addCase(fetchActivities.fulfilled, (state, action) => {
                state.activities.items = action.payload;
                state.activities.status = 'loaded';
            })
            .addCase(fetchActivities.rejected, (state) => {
                state.activities.items = [];
                state.activities.status = 'error';
            })
            // Handle fetchActivityById
            .addCase(fetchActivityById.pending, (state) => {
                state.selectedActivity.item = null;
                state.selectedActivity.status = 'loading';
            })
            .addCase(fetchActivityById.fulfilled, (state, action) => {
                state.selectedActivity.item = action.payload;
                state.selectedActivity.status = 'loaded';
            })
            .addCase(fetchActivityById.rejected, (state) => {
                state.selectedActivity.item = null;
                state.selectedActivity.status = 'error';
            })
            // Handle fetchRemoveActivities
            .addCase(fetchRemoveActivities.pending, (state, action) => {
                state.activities.items = state.activities.items.filter(obj => obj._id !== action.meta.arg);
            });
    }
});

export const activitiesReducer = activitiesSlice.reducer;