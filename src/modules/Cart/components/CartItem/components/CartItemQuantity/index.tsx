import { LineItem } from '@commercetools/platform-sdk';
import { Button, Stack, Typography } from '@mui/material';
import { localizedStringToString } from 'helpers';
import { count, countBlock, title, titleContainer } from './styles';

const CartItemQuantity = ({ item }: { item: LineItem }) => {
  const { quantity, name } = item;
  const getName = localizedStringToString('en-US');

  return (
    <Stack sx={titleContainer}>
      <Typography variant="h6" sx={title}>
        {getName(name)}
      </Typography>
      <Stack sx={countBlock}>
        <Button>-</Button>
        <Typography variant="h5" sx={count}>
          {quantity}
        </Typography>
        <Button>+</Button>
      </Stack>
    </Stack>
  );
};

export default CartItemQuantity;
