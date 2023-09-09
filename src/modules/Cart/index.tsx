import { LineItem } from '@commercetools/platform-sdk';
import { Stack, Paper, Typography } from '@mui/material';
import CartItem from './components/CartItem';

interface ICart {
  lineItems: LineItem[];
}
const Cart = ({ lineItems }: ICart) => {
  return (
    <Stack
      flexDirection="row"
      justifyContent="space-around"
      sx={{ width: '100%' }}
    >
      <Paper sx={{ p: '1rem 2rem' }}>
        <Typography variant="h4">Your orders</Typography>
        <Typography variant="body2" color="GrayText">
          2 items for 1000 Euro
        </Typography>
        {lineItems.map((item: LineItem) => (
          <CartItem key={item.id} />
        ))}
      </Paper>
      <Paper>45</Paper>
    </Stack>
  );
};

export default Cart;
