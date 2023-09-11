import { Box, Button, Stack, Typography } from '@mui/material';
import { Localization } from 'types';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { LineItem } from '@commercetools/platform-sdk';
import convertEuroCentToEuro from 'modules/Cart/helpers';

interface ICartItem {
  item: LineItem;
}

const CartItem = ({ item }: ICartItem) => {
  const { name, quantity, variant, totalPrice } = item;

  const convertedPrice = convertEuroCentToEuro(totalPrice.centAmount);

  return (
    <Stack flexDirection="row" gap="1rem" sx={{ p: '1rem 0.5rem' }}>
      <Box sx={{ width: '70px', height: '70px' }}>
        <img
          src={variant.images && variant.images[0].url}
          alt=""
          srcSet=""
          width="100%"
          height="100%"
        />
      </Box>
      <Stack sx={{ flex: 1, ml: '1rem' }} justifyContent="space-between">
        <Typography variant="h6">{name[Localization.en]}</Typography>
        <Stack flexDirection="row" alignItems="flex-end">
          <Button>-</Button>
          <Typography variant="h5">{quantity}</Typography>
          <Button>+</Button>
        </Stack>
      </Stack>
      <Stack alignItems="flex-end" justifyContent="space-between">
        <DeleteOutlineIcon sx={{ cursor: 'pointer' }} />
        <Typography variant="h5">{convertedPrice} €</Typography>
      </Stack>
    </Stack>
  );
};
export default CartItem;
