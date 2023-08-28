import { _ErrorResponse } from '@commercetools/platform-sdk';
import { PayloadAction } from '@reduxjs/toolkit';
import { AppState } from 'types';

const setRejectedStatus = (
  state: AppState,
  { payload }: PayloadAction<unknown>
): void => {
  state.loading = 'failed';
  const error = payload as _ErrorResponse;
  state.error = error;
};

export default setRejectedStatus;
