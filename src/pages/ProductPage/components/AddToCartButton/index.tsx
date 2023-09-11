import { Button } from '@mui/material';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { useAppSelector } from 'hooks/useRedux';
import { addToCartHandler } from 'helpers';
import buttonStyles from './buttonStyles';

const AddToCartButton = () => {
  const { id } = useAppSelector((state) => state.singleProductDataSlice.data!);

  return (
    <Button
      onClick={() => addToCartHandler(id)}
      variant="contained"
      sx={buttonStyles}
    >
      <AddShoppingCartRoundedIcon sx={{ mr: '0.5rem' }} />
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
