import { useAppSelector } from 'hooks/useRedux';
import { useState } from 'react';
import ProductCardPrice from './components/ProductCardPrice';
import ProductCharacteristics from './components/ProductCharacteristics';
import ProductImages from './components/ProductImages';
import ModalWindow from './components/ModalWindow';
import parseHtmlSafely from './helpers/parseHtmlSafely';
import styles from './ProductPage.module.scss';

const ProductPage = () => {
  const { data } = useAppSelector(
    ({ singleProductDataSlice }) => singleProductDataSlice
  );
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = (step: number) => {
    setActiveStep(step);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <section className={styles.product}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.head}>
            <h2 className={styles.title}>{data?.name}</h2>
            <p className={styles.sku}>{`SKU: ${data?.sku}`}</p>
          </div>
          {data?.images && (
            <>
              <ProductImages
                images={data.images}
                name={data?.name}
                handleOpen={handleOpen}
              />
              <ModalWindow
                images={data.images}
                name={data?.name}
                open={open}
                handleClose={handleClose}
                step={activeStep}
              />
            </>
          )}
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
