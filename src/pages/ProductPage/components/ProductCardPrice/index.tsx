import { CardActions } from '@mui/material';
import { IPriceData } from 'types';
import AddToCartButton from '../AddToCartButton';
import styles from './ProductCardPrice.module.scss';
import ProductPrice from './ProductPrice';

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
