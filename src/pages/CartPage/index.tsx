import { useAppSelector } from 'hooks/useRedux';
import Cart from 'modules/Cart';
import { EmptyCart } from 'modules/Cart/components';

const CartPage = () => {
  const { data } = useAppSelector((state) => state.cartSlice);

  const isCartNotEmpty = data && data.lineItems.some(() => true);

  return !isCartNotEmpty ? <Cart lineItems={data.lineItems} /> : <EmptyCart />;
};

export default CartPage;
