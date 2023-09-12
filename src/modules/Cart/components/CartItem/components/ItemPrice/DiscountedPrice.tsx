import { calculatePriceByFraction } from 'helpers';
import { IPriceProps } from './types';
import styles from './ItemPrice.module.scss';

const DiscountedPrice = ({ price, quantity }: IPriceProps) => {
  const calculatedPrice = `${calculatePriceByFraction(price) * quantity} €`;

  return <span className={styles.discounted_price}>{calculatedPrice}</span>;
};

export default DiscountedPrice;
