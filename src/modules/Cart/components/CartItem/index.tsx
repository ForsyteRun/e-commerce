import { LineItem } from '@commercetools/platform-sdk';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Localization } from 'types';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

interface ICartItem {
  item: LineItem;
}

const CartItem = ({ item }: ICartItem) => {
  const { name, quantity, variant, price } = item;
  return (
    <Stack flexDirection="row" gap="1rem" sx={{ p: '1rem 0.5rem' }}>
      <Box>
        <img
          src={variant.images && variant.images[0].url}
          alt=""
          srcSet=""
          width={70}
          height={70}
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
        <Typography variant="h5">{price.value.centAmount}</Typography>
      </Stack>
    </Stack>
  );
};
export default CartItem;
