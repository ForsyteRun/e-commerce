import { Paper, Stack, Typography } from '@mui/material';
import { LineItem } from '@commercetools/platform-sdk';
import { useAppSelector } from 'hooks/useRedux';
import { PriceBlock, CartItem } from './components';
import { container, mainBlock } from './styles';
import { ICart } from './types';

const Cart = ({ lineItems }: ICart) => {
  const { data } = useAppSelector((state) => state.cartSlice);

  const badgeItemCount = data?.lineItems.length;

  return (
    <Stack sx={container}>
      <Paper sx={mainBlock}>
        <Typography variant="h4">Your order</Typography>
        <Typography variant="body2" color="GrayText">
          {badgeItemCount} items for 1000 Euro
        </Typography>
        {lineItems.map((item: LineItem) => (
          <CartItem key={item.id} item={item} />
        ))}
      </Paper>
      <PriceBlock />
    </Stack>
  );
};

export default Cart;
