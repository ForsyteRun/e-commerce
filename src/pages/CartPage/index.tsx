/* eslint-disable react-hooks/exhaustive-deps */
import { MyCartUpdateAction } from '@commercetools/platform-sdk';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import Cart from 'modules/Cart';
import { EmptyCart } from 'modules/Cart/components';
import { useEffect } from 'react';
import { updateCart } from 'store/cartSlice/thunks';

const CartPage = () => {
  const { data } = useAppSelector((state) => state.cartSlice);
  const dispatch = useAppDispatch();

  const isCartNotEmpty = !!data?.lineItems.length;

  useEffect(() => {
    const action: MyCartUpdateAction = {
      action: 'addDiscountCode',
      code: 'summer',
    };

    dispatch(updateCart(action));
  }, []);

  return isCartNotEmpty ? <Cart lineItems={data.lineItems} /> : <EmptyCart />;
};

export default CartPage;
