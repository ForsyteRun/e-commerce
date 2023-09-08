import { CartDraft } from '@commercetools/platform-sdk';
import { useAppDispatch } from 'hooks/useRedux';
import EmptyCart from 'modules/Cart/components';
import { useEffect } from 'react';
import createCart from '../../store/cartSlice/createCart';

const CartPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const data: CartDraft = {
      currency: 'EUR',
    };

    dispatch(createCart(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <EmptyCart />;
};

export default CartPage;
