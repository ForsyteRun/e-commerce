import { SxProps } from '@mui/material';

const cardStyles: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  columnGap: '2rem',
  maxWidth: '300px',
  maxHeight: 'max-content',
  width: '100%',
  padding: '1rem',
  backgroundColor: '#ffffff',
  border: '1px solid #eaebed',
  borderRadius: '10px',
  boxShadow: 'none',
  transition: 'box-shadow 0.2s ease-in-out',
  textDecoration: 'none',
  cursor: 'pointer',
  '@media (hover: hover)': {
    '&:hover': {
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
    },
  },
};
export default cardStyles;