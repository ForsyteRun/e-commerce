import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';

const reducer = { userSlice };

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: import.meta.env.DEV,
});

export default store;
