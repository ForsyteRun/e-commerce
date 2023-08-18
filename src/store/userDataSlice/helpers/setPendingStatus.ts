import { IUserState } from '../../../types';

const setPendingStatus = (state: IUserState) => {
  state.loading = 'pending';
  state.error = null;
};

export default setPendingStatus;
