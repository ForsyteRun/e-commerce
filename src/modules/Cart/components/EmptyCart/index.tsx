import { Button, Stack, Typography, Box } from '@mui/material';
import emptyCart from 'assets/images/png/emptyCart.png';
import { NavLink } from 'react-router-dom';
import { PathNames } from 'types';
import {
  container,
  titleBlock,
  title,
  subTitle,
  imageEmptyCart,
} from './styles';

const EmptyCart = () => {
  return (
    <Stack sx={container}>
      <Stack sx={titleBlock}>
        <Typography variant="h2" sx={title}>
          Cart is empty
        </Typography>
        <Typography variant="h4" sx={subTitle}>
          Continue shopping with us!
        </Typography>
        <Typography variant="h4" sx={subTitle}>
          The best deals await you
        </Typography>
      </Stack>
      <Box
        component="img"
        sx={imageEmptyCart}
        alt="emptyCart"
        src={emptyCart}
      />
      <Button
        variant="contained"
        component={NavLink}
        to={PathNames.catalog}
        sx={{ p: '0.2rem 1rem' }}
      >
        go shopping
      </Button>
    </Stack>
  );
};

export default EmptyCart;
