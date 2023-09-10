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
  p: '1rem 1.5rem',
  flexBasis: '50%',
  '@media (max-width: 768px)': {
    flexBasis: '57%',
  },
};
