import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import registrationAccessCodeSlice from './registration/registrationAccess.slice';
import tokenStoreSlice from './tokenStoreSlice';

const reducer = { userSlice, tokenStoreSlice, registrationAccessCodeSlice };

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: import.meta.env.DEV,
});

export default store;
