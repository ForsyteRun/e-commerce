import { IUserState, IProductsData, ISingleProductData } from 'types';

function setPendingStatus(
  state: IUserState | IProductsData | ISingleProductData
): void {
  state.loading = 'pending';
  state.error = null;
}

export default setPendingStatus;
