import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchActivities = createAsyncThunk('activities/fetchActivities', async () => {
    const { data } = await axios.get('/activities');
    return data;
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
    extraReducers: {
        [fetchActivities.pending]: (state) => {
            state.activities.items = [];
            state.activities.status = 'loading';
        },
        [fetchActivities.fulfilled]: (state, action) => {
            state.activities.items = action.payload;
            state.activities.status = 'loaded';
        },
        [fetchActivities.rejected]: (state) => {
            state.activities.items = [];
            state.activities.status = 'error';
        },
        [fetchRemoveActivities.pending]: (state, action) => {
            state.activities.items = state.activities.items.filter(obj => obj._id !== action.meta.arg);
        },
    }
});

export const activitiesReducer = activitiesSlice.reducer;