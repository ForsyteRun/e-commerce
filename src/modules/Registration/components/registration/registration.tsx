/* eslint-disable jsx-a11y/label-has-associated-control */
import { Field, Form, Formik } from 'formik';
import { END_YEAR, START_DAYS, allMonths } from '../../constants';
import Adress from '../adress/Adress';
import Select from '../select/select';
import styles from './registration.module.scss';
import { InitialValue } from './types';
import { validateEmail, validateName, validatePassword } from './validation';

const initialValues: InitialValue = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  date: START_DAYS.toString(),
  month: allMonths[0],
  year: END_YEAR.toString(),
  country: '',
  city: '',
  street: '',
  postCode: '',
};

function Registration(): JSX.Element {
  return (
    <div className={styles.register}>
      <h2 className={styles.title}>I’m new here</h2>
      <Formik<InitialValue>
        initialValues={initialValues}
        onSubmit={(value: InitialValue) => console.log(value)}
      >
        {({ errors, touched }) => (
          <Form method="post" action="register" className={styles.form}>
            <div className={styles.input__container}>
              <label htmlFor="firstName" className={styles.label}>
                FirstName
              </label>
              <Field
                name="firstName"
                validate={validateName}
                className={styles.input}
                placeholder="First Name*"
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
    </div>
  );
}

export default Registration;
