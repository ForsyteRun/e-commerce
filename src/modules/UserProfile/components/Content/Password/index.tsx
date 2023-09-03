/* eslint-disable react-hooks/exhaustive-deps */
import { CustomerChangePassword } from '@commercetools/platform-sdk';
import { Box, Button, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { useEffect, useState } from 'react';
import { updatePassword } from 'store/userDataSlice/thunks';
import DialogInit from './components/DialogInit';
import PasswordField from './components/PasswordField';
import { DialogModalAnswer, InitialValues } from './types';
import Alert from '../../Alert';
import validationSchema from './components/PasswordField/validation';
import { fieldTitle } from './constants';

const initialValues: InitialValues = {
  currentPassword: '',
  newPassword: '',
  repeatNewPassword: '',
};

const Password = () => {
  const dispatch = useAppDispatch();
  const { id, version } = useAppSelector((state) => state.userDataSlice.data);

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('no');
  const [formData, setFormData] = useState<CustomerChangePassword | null>(null);

  const handleSubmit = (values: InitialValues) => {
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
  };

  useEffect(() => {
    if (selectedValue === DialogModalAnswer.yes && formData) {
      dispatch(updatePassword(formData));
      setSelectedValue(DialogModalAnswer.no);
    }

    return () => setFormData(null);
  }, [selectedValue]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <>
        <Box sx={{ mb: '4rem' }}>
          <Typography variant="h3" sx={{ mb: '1rem' }}>
            Update password
          </Typography>
          <Typography variant="h5">
            You can update your password at any time below.
          </Typography>
        </Box>
        <Form
          style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}
        >
          {fieldTitle.map((title: string) => (
            <PasswordField name={title} key={title} />
          ))}
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </Form>
        <DialogInit
          open={open}
          setOpen={setOpen}
          setSelectedValue={setSelectedValue}
        />
        <Alert />
      </>
    </Formik>
  );
};

export default Password;
