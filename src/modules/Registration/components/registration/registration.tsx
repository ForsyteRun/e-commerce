/* eslint-disable jsx-a11y/label-has-associated-control */
import { Formik, Form, Field } from 'formik';
import s from './registration.module.scss';
import Select from '../select/select';
import { validateEmail, validateName, validatePassword } from './validation';
import { InitialValue } from './types';
import { START_DAYS, START_YEAR, allMonths } from '../../constants';

const initialValues: InitialValue = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  date: START_DAYS.toString(),
  month: allMonths[0],
  year: START_YEAR.toString(),
};

function Registration() {
  return (
    <div className={s.register}>
      <h2 className={s.title}>I’m new here</h2>
      <Formik<InitialValue>
        initialValues={initialValues}
        onSubmit={(value: InitialValue) => console.log(value)}
      >
        {({ errors, touched }) => (
          <Form method="post" action="register" className={s.form}>
            <div className={s.input__container}>
              <label htmlFor="firstName" className={s.label}>
                FirstName
              </label>
              <Field
                name="firstName"
                validate={validateName}
                className={s.input}
                placeholder="First Name*"
              />
              {errors.firstName && touched.firstName && (
                <div className={s.errorValid}>{errors.firstName}</div>
              )}
            </div>
            <div className={s.input__container}>
              <label htmlFor="lastName">LastName</label>
              <Field
                name="lastName"
                validate={validateName}
                placeholder="Last Name*"
                className={s.input}
              />
              {errors.lastName && touched.lastName && (
                <div className={s.errorValid}>{errors.lastName}</div>
              )}
            </div>
            <div className={s.input__container}>
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                validate={validateEmail}
                placeholder="email*"
                className={s.input}
              />
              {errors.email && touched.email && (
                <div className={s.errorValid}>{errors.email}</div>
              )}
            </div>
            <div className={s.input__container}>
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                validate={validatePassword}
                placeholder="password*"
                className={s.input}
              />
              {errors.password && touched.password && (
                <div className={s.errorValid}>{errors.password}</div>
              )}
            </div>
            <Select />
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Registration;
