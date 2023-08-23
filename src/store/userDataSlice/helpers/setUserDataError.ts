import { IUserState } from 'types';

const setUserDataError = (state: IUserState) => {
  state.loading = 'failed';
  state.error = 'Something went wrong...';
};

export default setUserDataError;
