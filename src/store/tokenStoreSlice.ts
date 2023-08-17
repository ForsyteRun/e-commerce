import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TokenStore } from '@commercetools/sdk-client-v2';

const initialState: TokenStore = {
  token: '',
  expirationTime: 0,
  refreshToken: '',
};

const tokenStoreSlice = createSlice({
  name: 'tokenStore',
  initialState,
  reducers: {
    setTokenStore(state: TokenStore, action: PayloadAction<TokenStore>) {
      const { token, expirationTime, refreshToken } = action.payload;
      state.token = token;
      state.expirationTime = expirationTime;
      state.refreshToken = refreshToken;
    },
  },
});

export const { setTokenStore } = tokenStoreSlice.actions;
export default tokenStoreSlice.reducer;
