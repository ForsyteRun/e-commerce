// import { CustomerDraft } from '@commercetools/platform-sdk';
import { useAppSelector } from 'hooks/useRedux';
import { RegisteredUserData } from 'types';
import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { CustomerDraft } from '@commercetools/platform-sdk';
import { Form } from 'react-router-dom';
import { Field, Formik } from 'formik';
import styles from './UserInfo.module.scss';

const initialValues: CustomerDraft = {
  firstName: '',
  lastName: '',
  email: '',
  dateOfBirth: '',
};

const UserInfo: React.FC = () => {
  const [edit, setEdit] = React.useState(false);

  const { firstName, lastName, dateOfBirth } = useAppSelector(
    (state) => state.userDataSlice.data
  ) as RegisteredUserData;

  return (
    <div>
      <Box sx={{ mb: '4rem' }}>
        <Typography variant="h3" sx={{ mb: '1rem' }}>
          Personal details
        </Typography>
        <Typography variant="h5">
          Keep these up to date so you can breeze through checkout and see the
          best personalized offers!
        </Typography>
      </Box>
      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          p: '0 1rem',
          mb: '1rem',
        }}
      >
        <Button variant="contained" onClick={() => setEdit(!edit)}>
          Edit
        </Button>
      </Stack>
      {!edit ? (
        <Stack sx={{ gap: '3rem' }}>
          <Stack
            sx={{ flexDirection: 'row', justifyContent: 'space-between' }}
            className={styles.info}
          >
            <Typography variant="h5">First Name</Typography>
            <Typography variant="h5" sx={{ flexBasis: '50%' }}>
              {firstName}
            </Typography>
          </Stack>
          <Stack
            sx={{ flexDirection: 'row', justifyContent: 'space-between' }}
            className={styles.info}
          >
            <Typography variant="h5">Last Name</Typography>
            <Typography variant="h5" sx={{ flexBasis: '50%' }}>
              {lastName}
            </Typography>
          </Stack>
          <Stack
            sx={{ flexDirection: 'row', justifyContent: 'space-between' }}
            className={styles.info}
          >
            <Typography variant="h5">Date of birth</Typography>
            <Typography variant="h5" sx={{ flexBasis: '50%' }}>
              {dateOfBirth}
            </Typography>
          </Stack>
        </Stack>
      ) : (
        <Formik<CustomerDraft>
          initialValues={initialValues}
          onSubmit={(value: CustomerDraft) => {
            // eslint-disable-next-line no-console
            console.log(value);
          }}
        >
          {({ errors, touched }) => (
            <Form method="PUT" action="update" className={styles.form}>
              <Field
                name="firstName"
                // validate={validateName}
                placeholder="First Name"
                className={styles.input}
              />
              {errors.firstName && touched.firstName && (
                <div className={styles.errorValid}>{errors.firstName}</div>
              )}
              <Field
                name="lastName"
                // validate={validateName}
                placeholder="Last Name"
                className={styles.input}
              />
              {errors.lastName && touched.lastName && (
                <div className={styles.errorValid}>{errors.lastName}</div>
              )}
              <Field
                name="dateOfBirth"
                // validate={validateDateOfBirth}
                placeholder="DateOfBirth"
                className={styles.input}
              />
              {errors.dateOfBirth && touched.dateOfBirth && (
                <div className={styles.errorValid}>{errors.dateOfBirth}</div>
              )}
              {/* <AlertSnackBar open={open} setOpen={setOpen} /> */}
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default UserInfo;
