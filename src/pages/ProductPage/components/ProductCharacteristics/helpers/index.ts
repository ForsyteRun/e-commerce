import { SxProps } from '@mui/material';

export const listStyles: SxProps = {
  backgroundColor: '#faf5ff',
  borderRadius: '5px',
  borderLeft: '5px solid #673ab7',
  color: '#000',
  lineHeight: '1',
  marginTop: '1rem',
  padding: '5px 10px',
  width: '100%',
};

export const listItemStyles: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0px',
};

export const listItemTextStyles: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  width: '100%',
};

export const secondaryTypographyStyles = {
  sx: {
    color: '#000',
    '@media screen and (max-width: 425px)': {
      fontSize: '0.75rem',
    },
  },
};

export const primaryTypographyStyles = {
  sx: {
    fontWeight: '700',
    '@media screen and (max-width: 425px)': {
      fontSize: '0.875rem',
    },
  },
};
