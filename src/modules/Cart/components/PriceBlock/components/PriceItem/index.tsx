import { Stack, Typography } from '@mui/material';
import { IPriceItem } from 'modules/Cart/types';
import { container, priceStyle } from './styles';

const PriceItem = ({ title, price, discount }: IPriceItem) => {
  return (
    <Stack sx={container}>
      <Typography variant="h6" sx={priceStyle}>
        {title}
      </Typography>
      <Typography variant="h6" sx={priceStyle}>
        {price || discount}
      </Typography>
    </Stack>
  );
};

export default PriceItem;

PriceItem.defaultProps = {
  price: 0,
  address: '',
};
