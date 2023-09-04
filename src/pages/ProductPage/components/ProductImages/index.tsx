// import { Button } from '@mui/material';
import ProductCarouselSlider from './components/ProductCarouselSlider';
import { IProductImagesProps } from './types';
import styles from './ProductImages.module.scss';
import ProductImageButton from '../ProductImageButton';
// import { buttonImageStyles } from '../CarouselSlider/helpers';

const ProductImages = ({ images, name, handleOpen }: IProductImagesProps) => {
  const isMultipleImages: boolean = images.length > 1;

  return (
    <div className={styles.container}>
      {isMultipleImages ? (
        <ProductCarouselSlider
          images={images}
          name={name || ''}
          handleOpen={handleOpen}
        />
      ) : (
        <ProductImageButton
          image={images[0]}
          name={name || ''}
          handleOpen={handleOpen}
        />
      )}
    </div>
  );
};

export default ProductImages;
