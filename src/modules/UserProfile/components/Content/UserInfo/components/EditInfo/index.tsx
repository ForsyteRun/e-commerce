import { CustomerDraft, MyCustomerUpdate } from '@commercetools/platform-sdk';
import { Button } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { Select } from 'modules/Registration';
import updateUserData from 'modules/UserProfile/api';
import React from 'react';
import UserInfoSchema from '../../validation';
import styles from './editInfo.module.scss';

const initialValues: CustomerDraft = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  email: '',
};

interface IEditInfo {
  onClick: (value: boolean) => void;
}

const EditInfo: React.FC<IEditInfo> = ({ onClick }) => {
  // eslint-disable-next-line no-console
  console.log(onClick);

  const dispatch = useAppDispatch();
  const { version } = useAppSelector((state) => state.userDataSlice.data);

  return (
    <Formik<CustomerDraft>
      initialValues={initialValues}
      validationSchema={UserInfoSchema}
      onSubmit={(values: CustomerDraft) => {
        const updateData: MyCustomerUpdate = {
          version: version as number,
          actions: [
            {
              action: 'setFirstName',
              firstName: values.firstName,
            },
          ],
        };

        dispatch(updateUserData(updateData));
      }}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <div className={styles.input__container}>
            <Field
              name="firstName"
              placeholder="Enter first name"
              className={styles.input}
            />
            {errors.firstName && touched.firstName && (
              <div className={styles.errorValid}>{errors.firstName}</div>
            )}
          </div>
          <div className={styles.input__container}>
            <Field
              name="lastName"
              placeholder="Enter last name"
              className={styles.input}
            />
            {errors.lastName && touched.lastName && (
              <div className={styles.errorValid}>{errors.lastName}</div>
            )}
          </div>
          <div className={styles.input__container}>
            <Field
              name="email"
              placeholder="enter email"
              className={styles.input}
            />
            {errors.email && touched.email && (
              <div className={styles.errorValid}>{errors.email}</div>
            )}
          </div>
          {/* <Box sx={{ width: '100%' }}> */}
          <Select />
          {/* </Box> */}
          <Button
            variant="contained"
            type="submit"
            // onClick={() => onClick(false)}
          >
            submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default EditInfo;
