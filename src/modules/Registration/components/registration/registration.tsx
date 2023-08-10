/* eslint-disable jsx-a11y/label-has-associated-control */
import { Formik, Form, Field } from 'formik';
import s from './registration.module.scss';
import Select from '../select/select';

function validateEmail(value: string) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid firstName address';
  }
  return error;
}

function validateFirstName(value: string) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid firstName address';
  }
  return error;
}

function validateLastName(value: string) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid firstName address';
  }
  return error;
}

function validatePassword(value: string) {
  let error;
  if (!value) {
    error = 'Required';
  }
  return error;
}

function Registration() {
  return (
    <div className={s.register}>
      <h2 className={s.title}>I’m new here</h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ errors, touched }) => (
          <Form method="post" action="register" className={s.form}>
            <div className={s.input__container}>
              <label htmlFor="firstName" className={s.label}>
                FirstName
              </label>
              <Field
                name="firstName"
                validate={validateFirstName}
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
                validate={validateLastName}
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
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Registration;
