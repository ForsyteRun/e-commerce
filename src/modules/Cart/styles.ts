import { SxProps } from '@mui/material';

export const container: SxProps = {
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: '100%',
  '@media (max-width: 580px)': {
    flexDirection: 'column',
    gap: '1rem',
  },
};

export const mainBlock: SxProps = {
  flexBasis: '50%',
  p: '1rem 1.5rem',
  '@media (max-width: 768px)': {
    flexBasis: '57%',
  },
};
