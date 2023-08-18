import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import registrationAccessCodeSlice from './registration/registrationAccess.slice';
import tokenStoreSlice from './tokenStoreSlice';
import userDataSlice from './userDataSlice';

const reducer = {
  userSlice,
  tokenStoreSlice,
  registrationAccessCodeSlice,
  userDataSlice,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: import.meta.env.DEV,
});

export default store;
