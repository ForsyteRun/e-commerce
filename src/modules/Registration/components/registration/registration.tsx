import {
  ClientResponse,
  CustomerDraft,
  CustomerSignInResult,
  _ErrorResponse,
} from '@commercetools/platform-sdk';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import SnackBar from '../../../../components/SnackBar';
import apiRoot from '../../../../services/sdkClient/apiRoot';
import {
  RequestStatusAnswer,
  RequestStatusCode,
  RequestStatusColor,
} from '../../../../types';
import NavigateToLogin from '../NavigateToLogin';
import Adress from '../adress/Adress';
import Select from '../select/select';
import { BIRTH_INIT_DATA } from './constant';
import styles from './registration.module.scss';
import { validateEmail, validateName, validatePassword } from './validation';

const initialValues: CustomerDraft = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  dateOfBirth: BIRTH_INIT_DATA,
  addresses: [{ country: '', city: '', postalCode: '', streetName: '' }],
};

const Registration: React.FC = () => {
  const [status, setStatus] = useState<{ isError: boolean; isOk: boolean }>({
    isError: false,
    isOk: false,
  });

  const { isError, isOk } = status;

  // TODO: remove to separate file when REDUX appear
  const createCustomer = (data: CustomerDraft) => {
    apiRoot
      .customers()
      .post({
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      })
      .execute()
      .then((res: ClientResponse<CustomerSignInResult>) => {
        setStatus({ ...status, isOk: true });
        // eslint-disable-next-line no-console
        console.log(res);
      })
      .catch((error: _ErrorResponse) => {
        if (error.statusCode === RequestStatusCode.BadRequest) {
          setStatus({ ...status, isError: true });
        }
      });
  };

  return (
    <div className={styles.register}>
      <Formik<CustomerDraft>
        initialValues={initialValues}
        onSubmit={(value: CustomerDraft) => createCustomer(value)}
      >
        {({ errors, touched }) => (
          <Form method="post" action="register" className={styles.form}>
            <div className={styles.input__container}>
              <label htmlFor="firstName" className={styles.label}>
                FirstName
              </label>
              <Field
                id="firstName"
                name="firstName"
                validate={validateName}
                placeholder="First Name*"
                className={styles.input}
              />
              {errors.firstName && touched.firstName && (
                <div className={styles.errorValid}>{errors.firstName}</div>
              )}
            </div>
            <div className={styles.input__container}>
              <label htmlFor="lastName">LastName</label>
              <Field
                id="lastName"
                name="lastName"
                validate={validateName}
                placeholder="Last Name*"
                className={styles.input}
              />
              {errors.lastName && touched.lastName && (
                <div className={styles.errorValid}>{errors.lastName}</div>
              )}
            </div>
            <div className={styles.input__container}>
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                validate={validateEmail}
                placeholder="email*"
                className={styles.input}
              />
              {errors.email && touched.email && (
                <div className={styles.errorValid}>{errors.email}</div>
              )}
            </div>
            <div className={styles.input__container}>
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                type="password"
                name="password"
                validate={validatePassword}
                placeholder="password*"
                className={styles.input}
              />
              {errors.password && touched.password && (
                <div className={styles.errorValid}>{errors.password}</div>
              )}
            </div>
            <Select />
            <Adress />
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
      <NavigateToLogin />
      {isError && (
        <SnackBar
          title={RequestStatusAnswer.exist}
          color={RequestStatusColor.exist}
          setStatus={setStatus}
        />
      )}
      {isOk && (
        <SnackBar
          title={RequestStatusAnswer.success}
          color={RequestStatusColor.success}
          setStatus={setStatus}
        />
      )}
    </div>
  );
};

export default Registration;
