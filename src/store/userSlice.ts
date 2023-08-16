import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  isLogged: boolean;
}

const initialState: IUserState = {
  isLogged: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLoginState(state: IUserState, action: PayloadAction<boolean>) {
      return {
        ...state,
        isLogged: action.payload,
      };
    },
  },
});

export const { setUserLoginState } = userSlice.actions;
export default userSlice.reducer;
