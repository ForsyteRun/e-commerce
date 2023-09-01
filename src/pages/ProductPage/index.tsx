import parse from 'html-react-parser';
import { HideImage } from '@mui/icons-material';
import { useAppSelector } from 'hooks/useRedux';
import ProductCardPrice from './components/ProductCardPrice';
import ProductCharacteristics from './components/ProductCharacteristics';
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
          <div className={styles.images}>
            {data?.images ? (
              <img
                src={data?.images[0]}
                alt={data?.name}
                className={styles.image}
              />
            ) : (
              <HideImage
                sx={{
                  fontSize: '10rem',
                  color: 'rgba(25, 118, 210, 0.5)',
                }}
              />
            )}
          </div>
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
        {data?.description && parse(data.description)}
      </div>
    </section>
  );
};

export default ProductPage;
