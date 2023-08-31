import { IProductImage } from '../../types';
import styles from './ProductImage.module.scss';

const ProductImage = ({ url, name }: IProductImage) => {
  return (
    <div className={styles.container}>
      <img src={url} alt={name} className={styles.image} />
    </div>
  );
};

export default ProductImage;
