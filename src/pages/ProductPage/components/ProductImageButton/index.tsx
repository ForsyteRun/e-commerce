import { Button } from '@mui/material';
import { IProductImageButtonProps } from './types';
import styles from './ProductImageButton.module.scss';
import buttonImageStyles from './helpers/buttonImageStyles';

const ProductImageButton = ({
  image,
  name,
  handleOpen,
}: IProductImageButtonProps) => {
  const initialStep: number = 0;
  return (
    <Button onClick={() => handleOpen(initialStep)} sx={buttonImageStyles}>
      <img src={image} alt={name} className={styles.image} />
    </Button>
  );
};

export default ProductImageButton;
