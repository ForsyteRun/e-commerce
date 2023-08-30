import { SxProps } from '@mui/material';

const buttonStyles: SxProps = {
  transition: 'background-color 0.3s ease-in-out',
  '@media (hover: hover)': {
    '&:hover': {
      transition: 'background-color 0.3s ease-in-out',
    },
  },
};

export default buttonStyles;
