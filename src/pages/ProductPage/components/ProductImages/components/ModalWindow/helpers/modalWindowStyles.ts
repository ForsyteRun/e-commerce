import { SxProps } from '@mui/material';

export const modalWindowStyles: SxProps = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: 'max-content',
  userSelect: 'none',
};

export const popUpStyles: SxProps = {
  position: 'relative',
  padding: '1rem',
  margin: '0 1rem',
  borderRadius: '12px',
  backgroundColor: '#FAFAFA',
};

export const iconButtonStyles: SxProps = {
  position: 'absolute',
  top: '7px',
  right: '7px',
  '@media screen and (max-width: 425px)': {
    top: '3px',
    right: '3px',
  },
};
