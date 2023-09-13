import { SxProps } from '@mui/material';

export const container: SxProps = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: '300px',
  bgcolor: 'background.paper',
  borderRadius: '4px',
  p: '1.5rem',
};

export const buttonYes: SxProps = {
  color: '#4caf50',
  '@media (hover: hover)': {
    ':hover': {
      backgroundColor: 'rgba(76, 175, 80, 0.15)',
    },
  },
};

export const buttonNo: SxProps = {
  color: '#ff4b4b',
  '@media (hover: hover)': {
    ':hover': {
      backgroundColor: 'rgba(255, 75, 75, 0.15)',
    },
  },
};
