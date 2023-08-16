import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: InitialState = {
  registrationAccessCode: null,
};

interface InitialState {
  registrationAccessCode: number | null;
}

export const registrationAccessCodeSlice = createSlice({
  name: 'registrationAccessCode',
  initialState,
  reducers: {
    getRegistrationAccessCode: (
      state: InitialState,
      action: PayloadAction<number | null>
    ) => {
      console.log(action);

      state.registrationAccessCode = action.payload;
    },
  },
});

export const { getRegistrationAccessCode } =
  registrationAccessCodeSlice.actions;
export default registrationAccessCodeSlice.reducer;
