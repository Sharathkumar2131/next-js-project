// store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { setCookie, removeCookie } from 'cookies-next';

const initialState = {
  token: null,
  user: null, // Add user to state
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user; // Save user details
      setCookie('token', action.payload.token);
    },
    logout(state) {
      state.token = null;
      state.user = null; // Clear user details
      removeCookie('token');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
