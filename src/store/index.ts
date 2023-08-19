import { configureStore } from '@reduxjs/toolkit';
import registrationAccessCodeSlice from './registration/registrationAccess.slice';
import userDataSlice from './userDataSlice';

const reducer = {
  registrationAccessCodeSlice,
  userDataSlice,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: import.meta.env.DEV,
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
