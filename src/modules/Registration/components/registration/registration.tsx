/* eslint-disable jsx-a11y/label-has-associated-control */
import { CustomerDraft } from '@commercetools/platform-sdk';
import { Field, Form, Formik } from 'formik';
import createCustomer from '../../api/createCustomer';
import NavigateToLogin from '../NavigateToLogin';
import Adress from '../adress/Adress';
import Select from '../select/select';
import styles from './registration.module.scss';
// import { InitialValue } from './types';
import { validateEmail, validateName, validatePassword } from './validation';

const initialValues: CustomerDraft = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  dateOfBirth: '',
  addresses: [{ country: 'US', city: '', postalCode: '', streetName: '' }],
};

function Registration(): JSX.Element {
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
    </div>
  );
}

export default Registration;
