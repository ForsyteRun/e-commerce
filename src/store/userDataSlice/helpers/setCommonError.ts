import { IUserState } from '../../../types';

const setCommonError = (state: IUserState) => {
  state.loading = 'failed';
  state.error = 'Something went wrong...';
};

export default setCommonError;
