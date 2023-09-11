import { Button } from '@mui/material';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import { useAppSelector } from 'hooks/useRedux';
import { removeFromCartHandler } from 'helpers';
import buttonStyles from '../AddToCartButton/buttonStyles';

const RemoveFromCartButton = () => {
  const { id } = useAppSelector((state) => state.singleProductDataSlice.data!);

  return (
    <Button
      onClick={() => removeFromCartHandler(id)}
      variant="contained"
      sx={buttonStyles}
    >
      <RemoveShoppingCartOutlinedIcon sx={{ mr: '0.5rem' }} />
      Remove from cart
    </Button>
  );
};

export default RemoveFromCartButton;
