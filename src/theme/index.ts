import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    smPlus: true;
    md: true;
    lg: true;
    xl: true;
  }
}

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#f2f2f2',
          height: '100vh',
          width: '100%',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 440,
      sm: 600,
      smPlus: 748,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
