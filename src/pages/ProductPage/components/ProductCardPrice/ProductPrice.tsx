import { Typography } from '@mui/material';
import { Discount as DiscountIcon } from '@mui/icons-material';
import getPriceStyles from './getPriceStyles';
import { IProductPrice } from './types';

const ProductPrice = ({
  price,
  type,
  isDiscountedNet = false,
}: IProductPrice) => {
  const priceStyles = getPriceStyles(type, isDiscountedNet);

  return (
    <Typography sx={priceStyles}>
      {type === 'discounted' && (
        <DiscountIcon fontSize="small" sx={{ mr: '0.3rem' }} />
      )}
      <span>{`${price} €`}</span>
    </Typography>
  );
};

export default ProductPrice;
