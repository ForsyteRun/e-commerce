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

export const title: SxProps = {
  [theme.breakpoints.down('smPlus')]: {
    fontSize: '1.2rem',
  },
};

export const mainBlock: SxProps = {
  p: '1rem',
  flexBasis: '50%',
  [theme.breakpoints.down('md')]: {
    flexBasis: '55%',
  },
};
