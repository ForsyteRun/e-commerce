import { SxProps } from '@mui/material';

const useIconButtonColorTheme = (rgbColor: string): SxProps => {
  return {
    color: `rgba(${rgbColor}, 0.75)`,
    padding: '6px',
    transition:
      'color 150ms linear, background 150ms linear, box-shadow 150ms linear',
    ':hover': {
      color: `rgba(${rgbColor}, 0.9)`,
      backgroundColor: `rgba(${rgbColor}, 0.05)`,
      boxShadow: `0 0 5px 2px rgba(${rgbColor}, 0.05)`,
    },
  };
};

export default useIconButtonColorTheme;
