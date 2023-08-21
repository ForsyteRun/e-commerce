import { AlertProps, Snackbar, Stack } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import * as React from 'react';

import { useNavigate } from 'react-router-dom';
import { PathNames } from 'types';
import { SnackBarProps } from './types';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  }
);

const AlertSnackBar: React.FC<SnackBarProps> = ({ open, access, setOpen }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  if (access) {
    setTimeout(() => {
      navigate(PathNames.index);
    }, 1500);
  }

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={access ? 'success' : 'error'}
          sx={{ width: '100%' }}
        >
          {access ? 'Success!' : 'User exist!'}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default AlertSnackBar;
