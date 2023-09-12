import { Box, Stack, Typography } from '@mui/material';
import { LineItem } from '@commercetools/platform-sdk';
import calculatePriceByFraction from 'helpers/calculatePriceByFraction';
import DeleteItemButton from './components/DeleteItemButton';
import CartItemQuantity from './components/CartItemQuantity';
import { container, priceTitle, imgContainer } from './styles';

interface ICartItem {
  item: LineItem;
}

const CartItem = ({ item }: ICartItem) => {
  const { variant, totalPrice, productId } = item;

  const convertedPrice = calculatePriceByFraction(totalPrice);

  return (
    <Stack sx={container}>
      <Box sx={imgContainer}>
        <img
          src={variant.images && variant.images[0].url}
          alt=""
          srcSet=""
          width="100%"
          height="100%"
        />
      </Box>
      <CartItemQuantity item={item} />
      <Stack
        alignItems="flex-end"
        justifyContent="space-between"
        sx={{ flexBasis: '20%', gap: '10px' }}
      >
        <DeleteItemButton id={productId} />
        <Typography variant="h5" sx={priceTitle}>
          {convertedPrice} €
        </Typography>
      </Stack>
    </Stack>
  );
};
export default CartItem;
