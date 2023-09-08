import { CardActions } from '@mui/material';
import { IPriceData } from 'types';
import ProductPrice from './ProductPrice';
import AddToCartButton from '../AddToCartButton';
import styles from './ProductCardPrice.module.scss';

interface IProductCardPriceProps {
  price: IPriceData;
  productId: string;
}

const ProductCardPrice = ({ price, productId }: IProductCardPriceProps) => {
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
      <AddToCartButton productId={productId} />
    </CardActions>
  );
};

export default ProductCardPrice;
