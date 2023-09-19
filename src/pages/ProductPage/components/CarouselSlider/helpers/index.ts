import { SxProps } from '@mui/material';

export const mobileStepperStyles: SxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  columnGap: '2rem',
};

export const buttonStyles: SxProps = {
  borderRadius: '50%',
  border: '1px solid #EAEBED',
};

export const buttonImageStyles: SxProps = {
  backgroundColor: 'transparent',
  color: 'transparent',
  transition: 'none',
  '&:hover': {
    backgroundColor: 'transparent',
  },
  '&:active': {
    transform: 'none',
  },
};
