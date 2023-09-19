import { LineItem } from '@commercetools/platform-sdk';
import { Paper, Stack, Typography } from '@mui/material';
import calculatePriceByFraction from 'helpers/calculatePriceByFraction';
import { useAppSelector } from 'hooks/useRedux';
import { PriceBlock, CartItem, ClearCartButton } from './components';
import { container, mainBlock, title } from './styles';
import { ICart } from './types';

const Cart = ({ lineItems }: ICart) => {
  const { data } = useAppSelector((state) => state.cartSlice);

  const convertedPrice = calculatePriceByFraction(data?.totalPrice);
  const badgeItemCount = data?.lineItems.length;

  return (
    <Stack sx={container}>
      <Paper sx={mainBlock}>
        <Typography variant="h4" sx={title}>
          Your order
        </Typography>
        <Typography variant="body2" color="GrayText">
          {badgeItemCount} items for {convertedPrice} Euro
        </Typography>
        {lineItems.map((item: LineItem) => (
          <CartItem key={item.id} item={item} />
        ))}
        <ClearCartButton />
      </Paper>
      <PriceBlock />
    </Stack>
  );
};

export default Cart;
