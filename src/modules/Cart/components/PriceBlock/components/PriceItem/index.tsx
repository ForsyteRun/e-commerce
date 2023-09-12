import { Stack, Typography } from '@mui/material';
import { IPriceItem } from 'modules/Cart/types';
import priceStyle from './styles';

const PriceItem = ({ title, price, address }: IPriceItem) => {
  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      sx={{ mb: '1rem' }}
    >
      <Typography variant="h6" sx={priceStyle}>
        {title}
      </Typography>
      <Typography variant="h6" sx={priceStyle}>
        {price || address}
      </Typography>
    </Stack>
  );
};

export default PriceItem;

PriceItem.defaultProps = {
  price: 0,
  address: '',
};
