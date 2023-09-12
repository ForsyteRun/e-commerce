import { Price } from '@commercetools/platform-sdk';
import styles from './ItemPrice.module.scss';
import NetPrice from './NetPrice';
import DiscountedPrice from './DiscountedPrice';

interface IItemPrice {
  price: Price;
  quantity?: number;
}

const ItemPrice = ({ price, quantity = 1 }: IItemPrice) => {
  return (
    <div className={styles.item_price_container}>
      <NetPrice
        price={price.value}
        isDiscounted={!!price.discounted}
        quantity={quantity}
      />
      {price.discounted && (
        <DiscountedPrice price={price.discounted.value} quantity={quantity} />
      )}
    </div>
  );
};

ItemPrice.defaultProps = {
  quantity: 1,
};

export default ItemPrice;
