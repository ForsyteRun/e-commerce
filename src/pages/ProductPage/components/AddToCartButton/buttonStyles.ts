import { SxProps } from '@mui/material';

const buttonStyles: SxProps = {
  width: '100%',
  fontSize: '0.875rem',
  color: '#fff',
  borderRadius: '20px',
  backgroundColor: '#673ab7',
  whiteSpace: 'nowrap',
  '@media (hover: hover)': {
    '&:hover': {
      backgroundColor: '#5326a3',
      transition: 'all 0.3s ease-in-out',
    },
  },
  '@media screen and (max-width: 1024px)': {
    maxWidth: '370px',
    width: '100%',
  },
  '@media screen and (max-width: 425px)': {
    fontSize: '0.75rem',
  },
};
export default buttonStyles;
