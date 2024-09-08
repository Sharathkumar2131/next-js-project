// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import { getCookie } from 'cookies-next';
import authReducer from './authSlice';

// Read token from cookies on app start
const preloadedState = {
  auth: {
    token: getCookie('token') || null,
  },
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState,
});
