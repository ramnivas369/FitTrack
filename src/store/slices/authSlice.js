import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  profile: {}
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    register(state, action) {
      state.user = action.payload;
    },
    saveProfile(state, action) {
      state.profile = { ...state.profile, ...action.payload };
    },
    logout(state) {
      state.user = null;
      state.profile = {};
    }
  }
});

export const { login, register, saveProfile, logout } = authSlice.actions;
export default authSlice.reducer;
