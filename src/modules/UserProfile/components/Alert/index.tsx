import { Snackbar } from '@mui/material';
import { forwardRef, useEffect, useRef, useState } from 'react';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { RequestStatusCode } from 'types';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { getRegistrationAccessCode } from 'store/registration/registrationAccess.slice';

const AlertModal = forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  }
);

const Alert = () => {
  const dispatch = useAppDispatch();

  const { registrationAccessCode } = useAppSelector(
    (state) => state.registrationAccessCodeSlice
  );
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const handleClose = () => {
    setOpen(false);
    dispatch(getRegistrationAccessCode(0));
  };

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else if (registrationAccessCode === RequestStatusCode.BadRequest) {
      setError(true);
      setOpen(true);
    } else if (registrationAccessCode === RequestStatusCode.OK) {
      setError(false);
      setOpen(true);
    }
  }, [registrationAccessCode]);

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <AlertModal
        onClose={handleClose}
        severity={error ? 'error' : 'success'}
        sx={{ width: '100%' }}
      >
        {error ? 'wrong data' : 'success!'}
      </AlertModal>
    </Snackbar>
  );
};

export default Alert;
