import { Button } from '@mui/material';
import buttonStyles from './buttonStyles';

const AddToCartButton = () => {
  return (
    <Button variant="contained" sx={buttonStyles}>
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
