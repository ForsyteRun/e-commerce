import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';
import spinnerStyles from './spinnerStyles';

const Spinner = () => {
  return (
    <Box sx={spinnerStyles}>
      <CircularProgress color="secondary" thickness={6} />
    </Box>
  );
};

export default Spinner;
