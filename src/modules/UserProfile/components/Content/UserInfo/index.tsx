import { Box, Typography, Stack, Button } from '@mui/material';
import { Field, Formik, Form } from 'formik';
import React from 'react';
import { useAppSelector } from 'hooks/useRedux';
import { RegisteredUserData } from 'types';
import { CustomerDraft } from '@commercetools/platform-sdk';
import { RegistrationSchema } from 'modules/Registration';
import styles from './UserInfo.module.scss';

const UserInfo: React.FC = () => {
  const [edit, setEdit] = React.useState(false);

  const { firstName, lastName, dateOfBirth } = useAppSelector(
    (state) => state.userDataSlice.data
  ) as RegisteredUserData;

  const initialValues: CustomerDraft = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
  };

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
          edit
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
        <Formik
          initialValues={initialValues}
          validationSchema={RegistrationSchema}
          onSubmit={(values: CustomerDraft) => {
            // Handle form submission
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className={styles.form}>
              <Field
                name="firstName"
                placeholder="Enter first name"
                className={styles.input}
              />
              {errors.firstName && touched.firstName && (
                <div className={styles.errorValid}>{errors.firstName}</div>
              )}
              <Field
                name="lastName"
                placeholder="Enter last name"
                className={styles.input}
              />
              {errors.lastName && touched.lastName && (
                <div className={styles.errorValid}>{errors.lastName}</div>
              )}
              <Field
                name="dateOfBirth"
                placeholder="Enter date of birth"
                className={styles.input}
              />
              {errors.dateOfBirth && touched.dateOfBirth && (
                <div className={styles.errorValid}>{errors.dateOfBirth}</div>
              )}
              <button type="submit">Edit</button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default UserInfo;

// import { CustomerDraft } from '@commercetools/platform-sdk';
// import { Form, Field, Formik } from 'formik';
// import React from 'react';

// const initialValues: CustomerDraft = {
//   firstName: '',
//   lastName: '',
//   email: '',
//   dateOfBirth: '',
// };

// const UserInfo: React.FC = () => {
//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={(values) => {
//         console.log(values);
//       }}
//     >
//       {() => (
//         <Form>
//           <Field type="text" name="name2" />
//           <button type="submit"> Submit Form2 </button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default UserInfo;
