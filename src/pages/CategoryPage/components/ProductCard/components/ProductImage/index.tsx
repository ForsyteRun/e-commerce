import styles from './ProductImage.module.scss';

interface IProductImage {
  url: string | undefined;
  name: string;
}

const ProductImage = ({ url, name }: IProductImage) => {
  return (
    <div className={styles.container}>
      <img src={url} alt={name} className={styles.image} />
    </div>
  );
};

export default ProductImage;
