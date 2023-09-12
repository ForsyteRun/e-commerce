import { Box, Button, Stack, Typography } from '@mui/material';
import { Localization } from 'types';
import { LineItem } from '@commercetools/platform-sdk';
import convertEuroCentToEuro from 'modules/Cart/helpers';
import DeleteItemButton from './components/DeleteItemButton';
import {
  container,
  title,
  count,
  priceTitle,
  imgContainer,
  titleContainer,
  countBlock,
} from './styles';

interface ICartItem {
  item: LineItem;
}

const CartItem = ({ item }: ICartItem) => {
  const { name, quantity, variant, totalPrice, productId } = item;

  const convertedPrice = convertEuroCentToEuro(totalPrice.centAmount);

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
      <Stack sx={titleContainer}>
        <Typography variant="h6" sx={title}>
          {name[Localization.en]}
        </Typography>
        <Stack sx={countBlock}>
          <Button>-</Button>
          <Typography variant="h5" sx={count}>
            {quantity}
          </Typography>
          <Button>+</Button>
        </Stack>
      </Stack>
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
