import { Button } from '@mui/material';
import { IProductImageButtonProps } from './types';
import styles from './ProductImageButton.module.scss';
import buttonImageStyles from './helpers/buttonImageStyles';

const ProductImageButton = ({
  image,
  name,
  handleOpen,
}: IProductImageButtonProps) => {
  return (
    <Button onClick={() => handleOpen(0)} sx={buttonImageStyles}>
      <img src={image} alt={name} className={styles.image} />
    </Button>
  );
};

export default ProductImageButton;
