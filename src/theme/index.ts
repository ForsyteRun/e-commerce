import { createTheme } from '@mui/material';

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
});

export default theme;
