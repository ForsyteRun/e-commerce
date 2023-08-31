import { CardActions } from '@mui/material';
import { IPriceData } from 'types';
import ProductPrice from './ProductPrice';
import AddToCartButton from '../AddToCartButton';
import styles from './ProductCardPrice.module.scss';

const ProductCardPrice = ({ price }: { price: IPriceData }) => {
  return (
    <CardActions className={styles.cardActions}>
      <div className={styles.priceInfo}>
        <ProductPrice
          price={price.net}
          type="net"
          isDiscountedNet={!!price.discounted}
        />
        {price.discounted && (
          <ProductPrice price={price.discounted} type="discounted" />
        )}
      </div>
      <AddToCartButton />
    </CardActions>
  );
};

export default ProductCardPrice;
