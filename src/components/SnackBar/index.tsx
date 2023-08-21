import { Snackbar, Stack } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import * as React from 'react';

import { useNavigate } from 'react-router-dom';
import { PathNames, RequestStatusCode } from 'types';
import { getRegistrationAccessCode } from 'store/registration/registrationAccess.slice';
import getErrorSnackBar from './helpers';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  }
);

const AlertSnackBar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const { registrationAccessCode } = useAppSelector(
    (state) => state.registrationAccessCodeSlice
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const data = getErrorSnackBar(registrationAccessCode);

  React.useEffect(() => {
    setOpen(true);

    if (registrationAccessCode === RequestStatusCode.OK) {
      setTimeout(() => {
        navigate(PathNames.index);
        dispatch(getRegistrationAccessCode(0));
      }, 1500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      {data && (
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={data.severity}
            sx={{ width: '100%' }}
          >
            {data.access}
          </Alert>
        </Snackbar>
      )}
    </Stack>
  );
};

export default AlertSnackBar;
