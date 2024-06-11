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

export const fetchRemoveActivities = createAsyncThunk('activities/fetchRemoveActivities', async (id) => {
    axios.delete(`/activities/${id}`);
});

const initialState = {
    activities: {
        items: [],
        status: 'loading'
    }
};

const activitiesSlice = createSlice({
    name: 'activities',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
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
            .addCase(fetchRemoveActivities.pending, (state, action) => {
                state.activities.items = state.activities.items.filter(obj => obj._id !== action.meta.arg);
            });
    }
});

export const activitiesReducer = activitiesSlice.reducer;