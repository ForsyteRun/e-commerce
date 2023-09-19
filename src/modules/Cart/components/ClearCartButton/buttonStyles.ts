import { SxProps } from '@mui/material';

const buttonsStyles: SxProps = {
  color: '#ff4b4b',
  width: '100%',
  maxWidth: '250px',
  fontSize: '0.75rem',
  backgroundColor: 'transparent',
  border: '1px solid',
  borderRadius: '7.5px',
  mt: '1rem',
  whiteSpace: 'nowrap',
  ':disabled': {
    borderColor: 'rgba(0, 0, 0, 0.26)',
    backgroundColor: 'transparent',
  },
  '@media (hover: hover)': {
    ':hover': {
      backgroundColor: 'rgba(255, 75, 75, 0.15)',
    },
  },
};

export default buttonsStyles;
