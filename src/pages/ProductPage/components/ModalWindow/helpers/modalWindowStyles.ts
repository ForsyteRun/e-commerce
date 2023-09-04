import { SxProps } from '@mui/material';

export const modalWindowStyles: SxProps = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '1000px',
  width: '100%',
  margin: '0 auto',
  padding: '1rem',
  userSelect: 'none',
};

export const popUpStyles: SxProps = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '750px',
  maxHeight: '750px',
  width: '100%',
  height: '100%',
  padding: '1rem',
  borderRadius: '10px',
  backgroundColor: '#fff',
  '@media screen and (max-width: 648px)': {
    minHeight: 'max-content',
  },
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
