import { SxProps } from '@mui/material';

export const container: SxProps = {
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  flex: '1',
  '@media (max-width: 500px)': {
    fontSize: '24px',
  },
};

export const titleBlock: SxProps = {
  alignItems: 'center',
  gap: '1rem',
  '@media (max-width: 500px)': {
    gap: '0.5rem',
  },
};

export const title: SxProps = {
  '@media (max-width: 500px)': {
    fontSize: '50px',
  },
  '@media (max-width: 420px)': {
    fontSize: '35px',
  },
};

export const subTitle: SxProps = {
  '@media (max-width: 500px)': {
    fontSize: '20px',
  },
  '@media (max-width: 420px)': {
    fontSize: '12px',
  },
};

export const imageEmptyCart: SxProps = {
  '@media (max-width: 500px)': {
    width: '50%',
  },
};
