import { Button } from '@mui/material';
import { useAppSelector } from 'hooks/useRedux';
import buttonStyles from './buttonStyles';

const AddToCartButton = () => {
  const { id } = useAppSelector((state) => state.singleProductDataSlice.data!);
  const { lineItems } = useAppSelector((state) => state.cartSlice.data!);
  const isInCart = !!lineItems.find((item) => item.productId === id);

  return (
    <Button disabled={isInCart} variant="contained" sx={buttonStyles}>
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
