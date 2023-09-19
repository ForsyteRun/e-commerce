import { SxProps } from '@mui/material';
import theme from 'theme';

export const titleContainer: SxProps = {
  flex: 1,
  justifyContent: 'space-between',
  ml: '1rem',
  [theme.breakpoints.down('xs')]: {},
};

export const title: SxProps = {
  [theme.breakpoints.down('smPlus')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.7rem',
  },
};

export const container: SxProps = {
  flexDirection: 'row',
  gap: '1rem',
  p: '1rem 0.5rem',
  [theme.breakpoints.down('xs')]: {
    alignItems: 'center',
    gap: '0',
  },
};

export const priceTitle: SxProps = {
  [theme.breakpoints.down('smPlus')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.7rem',
  },
};

export const imgContainer: SxProps = {
  width: '70px',
  height: '70px',
  [theme.breakpoints.down('smPlus')]: {
    width: '45px',
    height: '45px',
  },
};
