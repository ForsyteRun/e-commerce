/* eslint-disable react-hooks/exhaustive-deps */
import { CustomerChangePassword } from '@commercetools/platform-sdk';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { useEffect, useState } from 'react';
import { updatePassword } from 'store/userDataSlice/thunks';
import * as Yup from 'yup';
import Alert from '../../Alert';
import DialogInit from './components/DialogInit';
import { DialogModalAnswer } from './types';

const validationSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .min(8, 'min 8 characters long')
    .matches(/^(?=.*[a-z])/, 'min 1 lowercase letter')
    .matches(/^(?=.*[A-Z])/, 'min 1 uppercase letter')
    .matches(/^(?=.*\d)/, 'min 1 number')
    .required('Required'),
  newPassword: Yup.string()
    .min(8, 'min 8 characters long')
    .matches(/^(?=.*[a-z])/, 'min 1 lowercase letter')
    .matches(/^(?=.*[A-Z])/, 'min 1 uppercase letter')
    .matches(/^(?=.*\d)/, 'min 1 number')
    .required('Required'),
  repeatNewPassword: Yup.string()
    .min(8, 'min 8 characters long')
    .matches(/^(?=.*[a-z])/, 'min 1 lowercase letter')
    .matches(/^(?=.*[A-Z])/, 'min 1 uppercase letter')
    .matches(/^(?=.*\d)/, 'min 1 number')
    .required('Required')
    .oneOf([Yup.ref('newPassword')], 'Passwords must match'),
});

// const Alert = forwardRef<HTMLDivElement, AlertProps>(
//   function Alert(props, ref) {
//     // eslint-disable-next-line react/jsx-props-no-spreading
//     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
//   }
// );

const Password = () => {
  const dispatch = useAppDispatch();
  const { id, version } = useAppSelector((state) => state.userDataSlice.data);
  // const { registrationAccessCode } = useAppSelector(
  //   (state) => state.registrationAccessCodeSlice
  // );

  // const [error, setError] = useState(false);
  // const [openSnackBar, setOpenSnackBar] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('no');
  const [formData, setFormData] = useState<CustomerChangePassword | null>(null);

  useEffect(() => {
    if (selectedValue === DialogModalAnswer.yes && formData) {
      dispatch(updatePassword(formData));
      setSelectedValue(DialogModalAnswer.no);
    }

    return () => setFormData(null);
  }, [selectedValue]);

  // // TODO: inAlert
  // useEffect(() => {
  //   if (registrationAccessCode === RequestStatusCode.BadRequest) {
  //     setError(true);
  //     setOpenSnackBar(true);
  //   } else {
  //     setError(false);
  //   }

  //   return () => {
  //     dispatch(getRegistrationAccessCode(0));
  //   };
  // }, [registrationAccessCode]);

  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      repeatNewPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      if (id && version) {
        const passwordData: CustomerChangePassword = {
          id,
          version,
          currentPassword: values.currentPassword,
          newPassword: values.newPassword,
        };

        setFormData(passwordData);
        setOpen(true);
      }
    },
  });
  return (
    <>
      <Box sx={{ mb: '4rem' }}>
        <Typography variant="h3" sx={{ mb: '1rem' }}>
          Update password
        </Typography>
        <Typography variant="h5">
          You can update your password at any time below.
        </Typography>
      </Box>
      <form
        onSubmit={formik.handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}
      >
        <TextField
          fullWidth
          id="currentPassword"
          name="currentPassword"
          label="Current password"
          value={formik.values.currentPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.currentPassword &&
            Boolean(formik.errors.currentPassword)
          }
          helperText={
            formik.touched.currentPassword && formik.errors.currentPassword
          }
        />
        <TextField
          fullWidth
          id="newPassword"
          name="newPassword"
          label="New password"
          type="newPassword"
          value={formik.values.newPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.newPassword && Boolean(formik.errors.newPassword)
          }
          helperText={formik.touched.newPassword && formik.errors.newPassword}
        />
        <TextField
          fullWidth
          id="repeatNewPassword"
          name="repeatNewPassword"
          label="Confirm new password"
          type="repeatNewPassword"
          value={formik.values.repeatNewPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.repeatNewPassword &&
            Boolean(formik.errors.repeatNewPassword)
          }
          helperText={
            formik.touched.repeatNewPassword && formik.errors.repeatNewPassword
          }
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
      <DialogInit
        open={open}
        setOpen={setOpen}
        setSelectedValue={setSelectedValue}
      />
      <Alert
      // openSnackBar={openSnackBar}
      // setOpenSnackBar={setOpenSnackBar}
      />
      {/* <Snackbar
        open={openSnackBar}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={error ? 'error' : 'success'}
          sx={{ width: '100%' }}
        >
          {error ? 'wrong data' : 'success!'}
        </Alert>
      </Snackbar> */}
    </>
  );
};

export default Password;
