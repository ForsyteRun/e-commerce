import { LoaderFunction } from 'react-router-dom';
import fetchSingleProductData from 'store/singleProductDataSlice/fetchSingleProductData';
import store from 'store';

const getProductData: LoaderFunction = async ({ params }) => {
  const { dispatch, getState } = store;
  await dispatch(fetchSingleProductData(params.product!));
  const { error } = getState().singleProductDataSlice;

  if (error) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw new Response('Error', {
      status: error.statusCode,
      statusText: error.message,
    });
  }

  return { ok: true };
};

export default getProductData;
