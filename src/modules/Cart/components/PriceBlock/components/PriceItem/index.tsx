import { Stack, Typography } from '@mui/material';
import { IPriceItem } from 'modules/Cart/types';

const PriceItem = ({ price }: IPriceItem) => {
  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      sx={{ mb: '1rem' }}
    >
      <Typography variant="h6">sum</Typography>
      <Typography variant="h6">{price}</Typography>
    </Stack>
  );
};

export default PriceItem;

PriceItem.defaultProps = {
  price: 0,
  address: '',
};
