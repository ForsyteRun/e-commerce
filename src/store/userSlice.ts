import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  isLogged: boolean;
  isUpdated: boolean;
  loginError: string | null;
}

const initialState: IUserState = {
  isLogged: false,
  isUpdated: false,
  loginError: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLoginState(state: IUserState, action: PayloadAction<boolean>) {
      state.isLogged = action.payload;
      state.isUpdated = true;
      return {
        ...state,
        isLogged: action.payload,
      };
    },
    setLoginError: (
      state: IUserState,
      action: PayloadAction<string | null>
    ) => {
      state.loginError = action.payload;
    },
  },
});

export const { setUserLoginState, setLoginError } = userSlice.actions;
export default userSlice.reducer;
