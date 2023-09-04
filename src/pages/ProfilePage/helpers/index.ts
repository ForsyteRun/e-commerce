import { SxProps } from '@mui/material';

const stackStyles: SxProps = {
  flexDirection: 'row',
  gap: '2rem',
  width: '100%',

  '@media screen and (max-width: 768px)': {
    flexDirection: 'column',
  },
};

export default stackStyles;
