import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import registrationAccessCodeSlice from './registration/registrationAccess.slice';

const reducer = { userSlice, registrationAccessCodeSlice };

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: import.meta.env.DEV,
});

export default store;
