import { CircularProgress, Box } from '@mui/material';

const Spinner = () => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <CircularProgress size={60} variant="indeterminate" />
    </Box>
  );
};

export default Spinner;
