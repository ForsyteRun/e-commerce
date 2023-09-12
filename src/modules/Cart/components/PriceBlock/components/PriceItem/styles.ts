import { SxProps } from '@mui/material';
import theme from 'theme';

const priceStyle: SxProps = {
  fontWeight: 700,
  [theme.breakpoints.down('smPlus')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.7rem',
  },
};

export default priceStyle;
