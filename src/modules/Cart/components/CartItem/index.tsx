import { LineItem } from '@commercetools/platform-sdk';
import { localizedStringToString } from 'helpers';
import DeleteItemButton from './components/DeleteItemButton';
import styles from './CartItem.module.scss';
import ItemPrice from './components/ItemPrice';
import ItemCounter from './components/ItemCounter';

const CartItem = ({ item }: { item: LineItem }) => {
  const { name, variant, productId, price, quantity, id } = item;

  const localizedName = localizedStringToString('en-US')(name);
  const imageUrl = variant.images && variant.images[0].url;

  return (
    <article className={styles.item}>
      <section className={styles.item_details_section}>
        <img className={styles.item_image} src={imageUrl} alt={localizedName} />
        <h4 className={styles.item_title}>{localizedName}</h4>
        <DeleteItemButton id={productId} />
      </section>
      <section className={styles.item_price_section}>
        <p className={styles.item_label}>Single price</p>
        <ItemPrice price={price} />
      </section>
      <section className={styles.item_price_section}>
        <p className={styles.item_label}>Total price</p>
        <ItemCounter price={price} quantity={quantity} id={id} />
      </section>
    </article>
  );
};
export default CartItem;
