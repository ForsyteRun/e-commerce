import createAnonymousClientApi from './createAnonymousClientApi';

const createNewAnonymousUserWithCart = () => {
  const api = createAnonymousClientApi();
  return api
    .me()
    .carts()
    .post({ body: { currency: 'EUR' } })
    .execute();
};

export default createNewAnonymousUserWithCart;
