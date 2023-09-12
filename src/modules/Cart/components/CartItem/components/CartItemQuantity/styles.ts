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

export const countBlock: SxProps = {
  flexDirection: 'row',
  alignItems: 'flex-end',
  [theme.breakpoints.down('smPlus')]: {
    alignItems: 'center',
  },
};

export const count: SxProps = {
  [theme.breakpoints.down('smPlus')]: {
    alignItems: 'center',
    fontSize: '1rem',
  },
};
