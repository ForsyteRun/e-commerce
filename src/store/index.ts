import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from 'store/categoriesSlice';
import sortSlice from 'store/sortSlice';
import registrationAccessCodeSlice from './registration/registrationAccess.slice';
import userDataSlice from './userDataSlice';
import productsDataSlice from './productsDataSlice';
import singleProductDataSlice from './singleProductDataSlice';
import cartSlice from './cartSlice';
import snackbarSlice from './snackbarSlice';
import searchSlice from './searchSlice';

const reducer = {
  registrationAccessCodeSlice,
  userDataSlice,
  productsDataSlice,
  singleProductDataSlice,
  categoriesSlice,
  sortSlice,
  searchSlice,
  cartSlice,
  snackbarSlice,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: import.meta.env.DEV,
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
