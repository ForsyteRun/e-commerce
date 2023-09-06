import { SxProps } from '@mui/material';

const buttonStyles: SxProps = {
  width: '100%',
  fontSize: '12px',
  color: '#673ab7',
  borderRadius: '20px',
  border: '2px solid #673ab7',
  whiteSpace: 'nowrap',
  '@media (hover: hover)': {
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: 'rgba(103, 58, 183, 0.1)',
      border: '2px solid #673ab7',
    },
  },
};
export default buttonStyles;
