import { SxProps } from '@mui/material';
import theme from 'theme';

export const container: SxProps = {
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: '100%',
  [theme.breakpoints.down('smPlus')]: {
    flexDirection: 'column',
    gap: '1rem',
  },
};

export const mainBlock: SxProps = {
  p: '1rem 1.5rem',
  flexBasis: '50%',
  [theme.breakpoints.down('md')]: {
    flexBasis: '65%',
  },
};
