import { AlertColor } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';

interface ISnackbarState {
  status: AlertColor;
  message: string | null;
  isOpen: boolean;
}

const initialState: ISnackbarState = {
  status: 'success',
  message: null,
  isOpen: false,
};

const snackbarSlice = createSlice({
  name: 'snackbarSlice',
  initialState,
  reducers: {
    showSnackbar(state, { payload }) {
      const { status, message } = payload;
      state.status = status;
      state.message = message;
      state.isOpen = true;
    },
    hideSnackbar(state) {
      state.message = null;
      state.isOpen = false;
    },
  },
});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
