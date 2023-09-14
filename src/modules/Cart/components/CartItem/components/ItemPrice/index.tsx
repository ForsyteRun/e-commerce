import { ModifyTypesPrice } from '../../types';
import DiscountedPrice from './DiscountedPrice';
import styles from './ItemPrice.module.scss';
import NetPrice from './NetPrice';

interface IItemPrice {
  price: ModifyTypesPrice;
  quantity?: number;
}

const ItemPrice = ({ price, quantity = 1 }: IItemPrice) => {
  const { value, discountedPrice, discounted } = price;

  const discountPrice = discounted?.value || discountedPrice?.value;

  return (
    <div className={styles.item_price_container}>
      <NetPrice
        price={value}
        isDiscounted={!!price.discounted || !!discountedPrice}
        quantity={quantity}
      />
      {discountPrice && (
        <DiscountedPrice price={discountPrice} quantity={quantity} />
      )}
    </div>
  );
};

ItemPrice.defaultProps = {
  quantity: 1,
};

export default ItemPrice;
