import { Alert, Snackbar } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { hideSnackbar } from 'store/snackbarSlice';

const AppSnackbar = () => {
  const { status, message, isOpen } = useAppSelector(
    (state) => state.snackbarSlice
  );
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(hideSnackbar());
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isOpen}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={status}
        sx={{ width: '100%', maxWidth: '300px' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AppSnackbar;
