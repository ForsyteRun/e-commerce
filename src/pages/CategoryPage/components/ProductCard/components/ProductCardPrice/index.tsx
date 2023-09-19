import { CardActions } from '@mui/material';
import { IPriceData } from 'types';
import { useAppSelector } from 'hooks/useRedux';
import { AddToCartButton } from 'UI/CartActionButton';
import ProductPrice from './ProductPrice';
import styles from './ProductCardPrice.module.scss';

interface IProductCardPriceProps {
  price: IPriceData;
  productId: string;
}

const ProductCardPrice = ({ price, productId }: IProductCardPriceProps) => {
  const { data } = useAppSelector((state) => state.cartSlice);
  const isInCart = !!data?.lineItems.find(
    (item) => item.productId === productId
  );

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
      <AddToCartButton id={productId} disabled={isInCart} />
    </CardActions>
  );
};

export default ProductCardPrice;
