import { _ErrorResponse } from '@commercetools/platform-sdk';
import { PayloadAction } from '@reduxjs/toolkit';
import { IProductsData, ISingleProductData } from 'types';

const setRejectedStatus = (
  state: IProductsData | ISingleProductData,
  { payload }: PayloadAction<unknown>
): void => {
  state.loading = 'failed';
  const error = payload as _ErrorResponse;
  state.error = error;
};

export default setRejectedStatus;
