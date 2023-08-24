import { IProductsData, ISingleProductData, IUserState } from 'types';
import setPendingStatus from './setPendingStatus';

describe('Testing setPendingStatus', () => {
  const state: IUserState | IProductsData | ISingleProductData = {
    data: null,
    loading: 'failed',
    error: {
      statusCode: 404,
      message: 'Not found',
    },
  };

  it('Should change state loading status to "pending" and reset an error', () => {
    const stateAfterChange: IUserState | IProductsData | ISingleProductData = {
      data: state.data,
      loading: 'idle',
      error: null,
    };

    setPendingStatus(state);
    expect(stateAfterChange).toStrictEqual(stateAfterChange);
  });
});
