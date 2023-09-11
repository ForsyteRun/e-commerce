import { CardActions } from '@mui/material';
import { useAppSelector } from 'hooks/useRedux';
import { IPriceData } from 'types';
import { AddToCartButton, RemoveFromCartButton } from 'UI/CartActionButton';
import styles from './ProductCardPrice.module.scss';
import ProductPrice from './ProductPrice';

const ProductCardPrice = ({ price }: { price: IPriceData }) => {
  const { id } = useAppSelector((state) => state.singleProductDataSlice.data!);
  const { data } = useAppSelector((state) => state.cartSlice);
  const isInCart = !!data?.lineItems.find((item) => item.productId === id);

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
      {data && !isInCart && <AddToCartButton id={id} />}
      {data && isInCart && <RemoveFromCartButton id={id} />}
    </CardActions>
  );
};

export default ProductCardPrice;
