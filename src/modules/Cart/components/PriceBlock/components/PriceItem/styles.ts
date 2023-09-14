import { SxProps } from '@mui/material';
import theme from 'theme';

export const container: SxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  mb: '1rem',
};

export const priceStyle: SxProps = {
  fontWeight: 700,
  [theme.breakpoints.down('smPlus')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.7rem',
  },
};
