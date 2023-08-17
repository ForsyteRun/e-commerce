import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: InitialState = {
  registrationAccessCode: null,
};

interface InitialState {
  registrationAccessCode: number | null;
}

const registrationAccessCodeSlice = createSlice({
  name: 'registrationAccess',
  initialState,
  reducers: {
    getRegistrationAccessCode: (
      state: InitialState,
      action: PayloadAction<number | null>
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
