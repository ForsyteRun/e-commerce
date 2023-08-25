import { SxProps } from '@mui/material';

const useIconButtonColorTheme = (rgbColor: string): SxProps => {
  return {
    color: `rgba(${rgbColor}, 0.75)`,
    transition: 'color 150ms linear, background-color 150ms linear',
    ':hover': {
      color: `${rgbColor}, 0.9)`,
      backgroundColor: `rgba(${rgbColor}, 0.07)`,
    },
  };
};

export default useIconButtonColorTheme;
