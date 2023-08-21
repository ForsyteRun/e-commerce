import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: InitialState = {
  registrationAccessCode: 0,
};

interface InitialState {
  registrationAccessCode: number;
}

const registrationAccessCodeSlice = createSlice({
  name: 'registrationAccess',
  initialState,
  reducers: {
    getRegistrationAccessCode: (
      state: InitialState,
      action: PayloadAction<number>
    ) => {
      return {
        ...state,
        registrationAccessCode: action.payload,
      };
    },
  },
});

export const { getRegistrationAccessCode } =
  registrationAccessCodeSlice.actions;
export default registrationAccessCodeSlice.reducer;
