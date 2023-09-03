import { HideImage } from '@mui/icons-material';
import { useState } from 'react';
import ModalWindow from './components/ModalWindow';
import ProductImageButton from './components/ProductImageButton';
import { IProductImagesProps } from './types';
import styles from './ProductImages.module.scss';

const ProductImages = ({ images, name }: IProductImagesProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.container}>
      {images ? (
        <div>
          <ProductImageButton
            handleOpen={handleOpen}
            image={images[0]}
            name={name || ''}
          />
          <ModalWindow
            open={open}
            handleClose={handleClose}
            images={images}
            name={name || ''}
          />
        </div>
      ) : (
        <HideImage
          sx={{
            fontSize: '10rem',
            color: 'rgba(25, 118, 210, 0.5)',
          }}
        />
      )}
    </div>
  );
};

export default ProductImages;
