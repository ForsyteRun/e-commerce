import { CustomerDraft } from '@commercetools/platform-sdk';
import { Button } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React, { Dispatch, SetStateAction } from 'react';
import UserInfoSchema from '../../validation';
import styles from './editInfo.module.scss';

const initialValues: CustomerDraft = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  email: '',
};

interface IEditInfo {
  setUserFullData: Dispatch<SetStateAction<CustomerDraft>>;
  onClick: (value: boolean) => void;
}

const EditInfo: React.FC<IEditInfo> = ({ setUserFullData, onClick }) => {
  return (
    <Formik<CustomerDraft>
      initialValues={initialValues}
      validationSchema={UserInfoSchema}
      onSubmit={(values: CustomerDraft) => {
        setUserFullData(values);
        onClick(false);
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
              <div className="errorValid">{errors.firstName}</div>
            )}
          </div>
          <div className={styles.input__container}>
            <Field
              name="lastName"
              placeholder="Enter last name"
              className={styles.input}
            />
            {errors.lastName && touched.lastName && (
              <div className="errorValid">{errors.lastName}</div>
            )}
          </div>
          <div className={styles.input__container}>
            <Field
              name="dateOfBirth"
              placeholder="enter dateOfBirth"
              className={styles.input}
            />
            {errors.dateOfBirth && touched.dateOfBirth && (
              <div className="errorValid">{errors.dateOfBirth}</div>
            )}
          </div>
          <div className={styles.input__container}>
            <Field
              name="email"
              placeholder="enter email"
              className={styles.input}
            />
            {errors.email && touched.email && (
              <div className="errorValid">{errors.email}</div>
            )}
          </div>
          <Button variant="contained" type="submit">
            submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default EditInfo;
