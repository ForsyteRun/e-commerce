import { SxProps } from '@mui/material';

const buttonStyles: SxProps = {
  fontSize: '12px',
  color: '#673ab7',
  borderRadius: '20px',
  border: '2px solid #673ab7',
  whiteSpace: 'nowrap',
  '&:hover': {
    textDecoration: 'none',
    backgroundColor: 'rgba(103, 58, 183, 0.04)',
    border: '2px solid #673ab7',
  },
};

export default buttonStyles;
