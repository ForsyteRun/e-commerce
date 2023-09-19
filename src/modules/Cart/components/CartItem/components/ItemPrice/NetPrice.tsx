import { calculatePriceByFraction } from 'helpers';
import { INetPriceProps } from './types';
import styles from './ItemPrice.module.scss';

const NetPrice = ({ price, isDiscounted, quantity }: INetPriceProps) => {
  const priceStyles = isDiscounted
    ? styles.net_price_discount
    : styles.net_price;

  const calculatedPrice = `${calculatePriceByFraction(price) * quantity} €`;

  return <span className={priceStyles}>{calculatedPrice}</span>;
};

export default NetPrice;
