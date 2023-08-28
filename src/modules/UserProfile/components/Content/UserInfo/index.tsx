// import { CustomerDraft } from '@commercetools/platform-sdk';
import { useAppSelector } from 'hooks/useRedux';
import { RegisteredUserData } from 'types';
import { Box, Stack, Typography } from '@mui/material';
import styles from './UserInfo.module.scss';

// const initialValues: CustomerDraft = {
//   firstName: '',
//   lastName: '',
//   email: '',
//   dateOfBirth: '',
// };

const UserInfo: React.FC = () => {
  const { firstName, lastName, dateOfBirth } = useAppSelector(
    (state) => state.userDataSlice.data
  ) as RegisteredUserData;

  return (
    <>
      <Box sx={{ mb: '4rem' }}>
        <Typography variant="h3">Personal details</Typography>
        <Typography variant="h5">
          Keep these up to date so you can breeze through checkout and see the
          best personalized offers!
        </Typography>
      </Box>
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
          <Typography variant="h5">DateOfBirth</Typography>
          <Typography variant="h5" sx={{ flexBasis: '50%' }}>
            {dateOfBirth}
          </Typography>
        </Stack>
      </Stack>
      {/* <Formik<CustomerDraft>
        initialValues={initialValues}
        onSubmit={(value: CustomerDraft) => {
          console.log(value);
        }}
      >
        {({ errors, touched }) => (
          <Form method="GET" action="register" className={styles.form}>
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
      {/* </Form>
        )}
      // </Formik> */}
    </>
  );
};

export default UserInfo;
