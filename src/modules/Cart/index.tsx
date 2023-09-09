import { LineItem } from '@commercetools/platform-sdk';
import { Paper, Stack, Typography } from '@mui/material';
import { PriceBlock, CartItem } from './components';
import { container, mainBlock } from './styles';
import { ICart } from './types';

const Cart = ({ lineItems }: ICart) => {
  return (
    <Stack sx={container}>
      <Paper sx={mainBlock}>
        <Typography variant="h4">Your order</Typography>
        <Typography variant="body2" color="GrayText">
          2 items for 1000 Euro
        </Typography>
        {lineItems.map((item: LineItem) => (
          <CartItem key={item.id} />
        ))}
      </Paper>
      <PriceBlock />
    </Stack>
  );
};

export default Cart;
