import { AppState } from 'types';

function setPendingStatus(state: AppState): void {
  state.loading = 'pending';
  state.error = null;
}

export default setPendingStatus;
