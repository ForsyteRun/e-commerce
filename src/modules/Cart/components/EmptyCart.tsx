import { Button, Stack, Typography } from '@mui/material';
import emptyCart from 'assets/images/png/emptyCart.png';
import { NavLink } from 'react-router-dom';
import { PathNames } from 'types';

const EmptyCart = () => {
  return (
    <Stack
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
      flex="1"
    >
      <Stack alignItems="center" gap="1rem">
        <Typography variant="h2">Cart is empty</Typography>
        <Typography variant="h4">
          Continue shopping with us! The best deals await you
        </Typography>
      </Stack>
      <img src={emptyCart} alt="emptyCart" />

      <Button
        variant="contained"
        component={NavLink}
        to={PathNames.catalog}
        sx={{ p: '15p' }}
      >
        go shopping
      </Button>
    </Stack>
  );
};

export default EmptyCart;
