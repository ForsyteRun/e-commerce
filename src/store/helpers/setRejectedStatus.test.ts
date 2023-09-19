import { IProductsData, ISingleProductData, IUserState } from 'types';
import setRejectedStatus from './setRejectedStatus';

describe('Testing setRejectedStatus', () => {
  const state: IUserState | IProductsData | ISingleProductData = {
    data: null,
    loading: 'pending',
    error: null,
  };

  it('Should change state loading status to "failed" and add error data', () => {
    const payload = {
      statusCode: 404,
      message: 'Not found',
    };

    const stateAfterChange: IUserState | IProductsData | ISingleProductData = {
      data: state.data,
      loading: 'failed',
      error: payload,
    };

    setRejectedStatus(state, { payload, type: '' });
    expect(state).toStrictEqual(stateAfterChange);
  });
});
