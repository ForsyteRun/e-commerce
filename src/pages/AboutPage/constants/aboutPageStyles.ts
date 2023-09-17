import { SxProps } from '@mui/material';

export const cardStyles: SxProps = {
  display: 'flex',
  columnGap: '2rem',
  padding: '2rem',
  width: '100%',
  borderRadius: '5px',
  '@media screen and (max-width: 648px)': {
    flexDirection: 'column',
    rowGap: '1.5rem',
  },
};

export const cardMediaStyles: SxProps = {
  flex: '2',
  maxWidth: '250px',
  width: '100%',
  height: 'auto',
  margin: 'auto',
  objectFit: 'contain',
};

export const cardContentStyles: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  rowGap: '1rem',
  flex: '1',
  padding: '0',
};
