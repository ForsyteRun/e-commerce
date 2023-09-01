import { SxProps } from '@mui/material';

export const listItem: SxProps = {
  alignItems: 'center',
  maxWidth: '250px',
  p: '0.5rem',
};

export const listButton: SxProps = {
  lineHeight: 1,
  m: '0.5rem auto',
  p: 0,
  ':hover': {
    backgroundColor: 'transparent',
    textDecoration: 'underline',
  },
};
