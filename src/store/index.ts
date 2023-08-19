import { configureStore } from '@reduxjs/toolkit';
import registrationAccessCodeSlice from './registration/registrationAccess.slice';

const reducer = { userSlice, tokenStoreSlice, registrationAccessCodeSlice };

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: import.meta.env.DEV,
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
