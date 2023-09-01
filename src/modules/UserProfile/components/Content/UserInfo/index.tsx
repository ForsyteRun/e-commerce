import { Box, Button, Snackbar, Typography } from '@mui/material';
import React, { useRef } from 'react';
import { useAppSelector } from 'hooks/useRedux';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { EditInfo, ShowInfo } from './components';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  }
);

const UserInfo: React.FC = () => {
  const [edit, setEdit] = React.useState(false);

  const { loading } = useAppSelector((state) => state.userDataSlice);
  const { registrationAccessCode } = useAppSelector(
    (state) => state.registrationAccessCodeSlice
  );

  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const firstRender = useRef(true);

  React.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else if (loading === 'succeeded' && registrationAccessCode === 200) {
      setEdit(false);
      setOpen(true);
      setError(false);
    } else if (loading === 'failed') {
      setError(true);
      setOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <>
      <Box sx={{ mb: '4rem' }}>
        <Typography variant="h3" sx={{ mb: '1rem' }}>
          Personal details
        </Typography>
        <Typography variant="h5">
          Keep these up to date so you can breeze through checkout and see the
          best personalized offers!
        </Typography>
        {!edit && (
          <Button
            variant="contained"
            type="submit"
            sx={{ display: 'block', float: 'right' }}
            onClick={() => setEdit(true)}
          >
            EditMode
          </Button>
        )}
      </Box>
      {!edit ? <ShowInfo /> : <EditInfo setEdit={setEdit} />}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={error ? 'error' : 'success'}
          sx={{ width: '100%' }}
        >
          {error ? 'wrong data' : 'success!'}
        </Alert>
      </Snackbar>
    </>
  );
};

export default UserInfo;
