import { SxProps } from '@mui/material';

const transition = 'all 0.3s ease-in-out';

const basicStyles: SxProps = {
  width: '100%',
  maxWidth: '300px',
  fontSize: '0.875rem',
  borderRadius: '20px',
  backgroundColor: 'transparent',
  border: '2px solid',
  boxShadow: 'none',
  whiteSpace: 'nowrap',
  ':disabled': {
    borderColor: 'rgba(0, 0, 0, 0.26)',
    backgroundColor: 'transparent',
  },
  '@media screen and (max-width: 425px)': {
    fontSize: '0.75rem',
  },
};

export const addToCartStyles: SxProps = {
  ...basicStyles,
  color: '#673ab7',
  borderColor: '#673ab7',
  '@media (hover: hover)': {
    '&:hover': {
      backgroundColor: 'rgba(83, 38, 163, 0.15)',
      transition,
    },
  },
};

export const removeFromCartStyles: SxProps = {
  ...basicStyles,
  color: '#ff4b4b',
  borderColor: '#ff4b4b',
  '@media (hover: hover)': {
    '&:hover': {
      backgroundColor: 'rgba(255, 75, 75, 0.15)',
      transition,
    },
  },
};
