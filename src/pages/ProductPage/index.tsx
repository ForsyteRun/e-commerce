import { useAppSelector } from 'hooks/useRedux';
import ProductCardPrice from './components/ProductCardPrice';
import ProductCharacteristics from './components/ProductCharacteristics';
import ProductImages from './components/ProductImages';
import parseHtmlSafely from './helpers/parseHtmlSafely';
import styles from './ProductPage.module.scss';

const ProductPage = () => {
  const { data } = useAppSelector(
    ({ singleProductDataSlice }) => singleProductDataSlice
  );

  return (
    <section className={styles.product}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.head}>
            <h2 className={styles.title}>{data?.name}</h2>
            <p className={styles.sku}>{`SKU: ${data?.sku}`}</p>
          </div>
          <ProductImages images={data?.images} name={data?.name} />
        </div>
        <div className={styles.rightContainer}>
          {data?.price && <ProductCardPrice price={data.price} />}
          <div className={styles.attributes}>
            <h2 className={styles.title}>Characteristics</h2>
            {data?.attributes && (
              <ProductCharacteristics attributes={data.attributes} />
            )}
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <h2 className={styles.title}>Description</h2>
        {data?.description && parseHtmlSafely(data.description)}
      </div>
    </section>
  );
};

export default ProductPage;
