import { CustomerDraft } from '@commercetools/platform-sdk';
import { Field, Form, Formik } from 'formik';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import renderSnackBar from '../../../../components/SnackBar/helpers';
import Adress from '../adress/Adress';
import validCountries from '../adress/constants';
import Select from '../select/select';
import { BIRTH_INIT_DATA } from './constant';
import styles from './registration.module.scss';
import { validateEmail, validateName, validatePassword } from './validation';
import { IDefaultAdress } from './types';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useRedux';
import { registerUser } from '../../../../store/userDataSlice/thunks';
import validateAdresses from './validation/validateAdresses';
import { PathNames } from '../../../../types';
import NavigateToLogin from '../navigateToLogin';

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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [shippingAdress, setShippingAdress] = useState<boolean>(false);
  const [billingAdress, setBillingAdress] = useState<boolean>(false);
  const [billingField, setBillingField] = useState<boolean>(false);

  const userType = useAppSelector((state) => state.userDataSlice.data.type);
  const { registrationAccessCode } = useAppSelector(
    (state) => state.registrationAccessCodeSlice
  );
  const anonymousCartId = useAppSelector(
    (state) => state.userDataSlice.data.cartId
  );

  useEffect(() => {
    if (userType === 'registered' && !registrationAccessCode) {
      navigate(PathNames.index, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userType, registrationAccessCode]);

  return (
    <div className={styles.register}>
      <h1 className={styles.title}>REGISTRATION</h1>
      <Formik<CustomerDraft>
        initialValues={initialValues}
        onSubmit={(value: CustomerDraft) => {
          const updateAdress: IDefaultAdress = {
            isSameBillingFieldAsShipping: billingField,
            defaultShippingAdress: shippingAdress,
            defaultBillingAdress: billingAdress,
          };
          const formData = validateAdresses(value, updateAdress);
          const data: CustomerDraft = {
            ...formData,
            anonymousCartId,
          };
          dispatch(registerUser(data));
        }}
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
              <Adress
                blockTitle="Shipping adress"
                field={0}
                adress={shippingAdress}
                setAdress={setShippingAdress}
              />
              {!billingField && (
                <Adress
                  blockTitle="Billiing adress"
                  field={1}
                  adress={billingAdress}
                  setAdress={setBillingAdress}
                />
              )}
            </div>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                checked={billingField}
                onChange={() => {
                  setBillingField(!billingField);
                  setBillingAdress(false);
                }}
              />
              <span>same shipping and billind adresses</span>
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
