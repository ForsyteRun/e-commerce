import { CustomerDraft } from '@commercetools/platform-sdk';
import { Field, Formik } from 'formik';
import { Form } from 'react-router-dom';
import renderSnackBar from '../../../../components/SnackBar/helpers';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useRedux';
import createCustomer from '../../api/createCustomer';
import validCountries from '../adress/constants';
import NavigateToLogin from '../navigateToLogin';
import Select from '../select/select';
import { BIRTH_INIT_DATA } from './constant';
import styles from './registration.module.scss';
import { validateEmail, validateName, validatePassword } from './validation';
import BillingAdress from '../adress/BillingAdress';
import ShippingAdress from '../adress/ShippingAdress';

const initialValues: CustomerDraft = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  dateOfBirth: BIRTH_INIT_DATA,
  addresses: [
    { country: validCountries[0], city: '', postalCode: '', streetName: '' },
    { country: validCountries[0], city: '', postalCode: '', streetName: '' },
  ],
};

const Registration: React.FC = () => {
  const { registrationAccessCode } = useAppSelector(
    (state) => state.registrationAccessCodeSlice
  );
  const dispatch = useAppDispatch();
  return (
    <div className={styles.register}>
      <h1 className={styles.title}>REGISTRATION</h1>
      <Formik<CustomerDraft>
        initialValues={initialValues}
        onSubmit={(value: CustomerDraft) => createCustomer(value, dispatch)}
      >
        {({ errors, touched }) => (
          <Form method="post" action="register" className={styles.form}>
            <div className={styles.name__container}>
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
            </div>
            <div className={styles.name__container}>
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
            </div>
            <Select />
            <div className={styles.adress__container}>
              <BillingAdress />
              <ShippingAdress />
              {/* <Adress blockTitle="Shipping adress" /> */}
            </div>
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
      <NavigateToLogin />
      {registrationAccessCode && renderSnackBar(registrationAccessCode)}
    </div>
  );
};

export default Registration;
