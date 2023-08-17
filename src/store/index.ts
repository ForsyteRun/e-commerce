import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import tokenStoreSlice from './tokenStoreSlice';

const reducer = { userSlice, tokenStoreSlice };

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: import.meta.env.DEV,
});

export default store;
