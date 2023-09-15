import { LineItem } from '@commercetools/platform-sdk';
import { localizedStringToString } from 'helpers';
import { ModifyPriceType } from 'modules/Cart/types';
import styles from './CartItem.module.scss';
import { DeleteItemButton, ItemCounter, ItemPrice } from './components';

const CartItem = ({ item }: { item: LineItem }) => {
  const {
    name,
    variant,
    productId,
    price,
    quantity,
    id,
    discountedPricePerQuantity,
  } = item;

  const modifyPrice: ModifyPriceType = {
    ...price,
    ...discountedPricePerQuantity[0],
  };

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
        <ItemPrice price={modifyPrice} />
      </section>
      <section className={styles.item_price_section}>
        <p className={styles.item_label}>Total price</p>
        <ItemCounter price={modifyPrice} quantity={quantity} id={id} />
      </section>
    </article>
  );
};

export default CartItem;
