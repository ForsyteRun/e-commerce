import { createSlice } from '@reduxjs/toolkit';
import createAnonymousUser from './thunks/createAnonymousUser';
import { IUserState } from './interfaces';

const initialState: IUserState = {
  data: {
    type: null,
    id: null,
    cartId: null,
  },
  loading: 'idle',
  error: null,
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAnonymousUser.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(createAnonymousUser.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = 'succeeded';
      })
      .addCase(createAnonymousUser.rejected, (state) => {
        state.loading = 'failed';
      });
  },
});

export { createAnonymousUser };
export default userDataSlice.reducer;
