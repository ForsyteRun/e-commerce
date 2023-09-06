import { Button } from '@mui/material';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import buttonStyles from './buttonStyles';

const AddToCartButton = () => {
  const isInCart = false;

  return (
    <Button
      aria-label="add-to-cart-button"
      variant="outlined"
      sx={buttonStyles}
      disabled={isInCart}
    >
      <AddShoppingCartRoundedIcon sx={{ mr: '0.5rem' }} />
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
