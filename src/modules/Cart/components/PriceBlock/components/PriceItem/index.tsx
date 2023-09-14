import { Stack, Typography } from '@mui/material';
import { IPriceItem } from 'modules/Cart/types';
import { container, fullPriceDiscount, priceStyle, discounted } from './styles';

const PriceItem = ({ title, price, discount, isDiscounted }: IPriceItem) => {
  const style = isDiscounted ? fullPriceDiscount : priceStyle;

  return (
    <Stack sx={container}>
      <Typography variant="h6" sx={priceStyle}>
        {title}
      </Typography>
      <Typography variant="h6" sx={discount ? discounted : style}>
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
