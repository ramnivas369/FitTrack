import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stepsToday: 0,
  activities: []
};

const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    setSteps(state, action) { state.stepsToday = action.payload; },
    addActivity(state, action) { state.activities.push(action.payload); }
  }
});

export const { setSteps, addActivity } = activitySlice.actions;
export default activitySlice.reducer;
