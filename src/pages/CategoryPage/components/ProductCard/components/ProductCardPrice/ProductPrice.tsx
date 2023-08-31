import { Typography } from '@mui/material';
import { Discount as DiscountIcon } from '@mui/icons-material';
import styles from './ProductCardPrice.module.scss';
import getPriceStyles from './getPriceStyles';
import { IProductPrice } from '../../types';

const ProductPrice = ({ price, type }: IProductPrice) => {
  const isDiscounted = type === 'discounted';

  const priceStyles = getPriceStyles(isDiscounted);

  return (
    <Typography sx={priceStyles}>
      {isDiscounted && (
        <DiscountIcon fontSize="medium" className={styles.discountIcon} />
      )}
      {`${price} €`}
    </Typography>
  );
};

export default ProductPrice;
