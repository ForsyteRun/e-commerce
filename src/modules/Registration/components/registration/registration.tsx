import { CustomerDraft } from '@commercetools/platform-sdk';
import AlertSnackBar from 'components/SnackBar';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { registerUser } from 'store/userDataSlice/thunks';
import { PathNames } from 'types';
import Address from '../adress/Adress';
import validCountries from '../adress/constants';
import NavigateToLogin from '../NavigateToLogin';
import Select from '../select/select';
import { BIRTH_INIT_DATA } from './constant';
import styles from './registration.module.scss';
import { IDefaultAddress } from './types';
import { validateAddresses, RegistrationSchema } from './validation';

const initialValues: CustomerDraft = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  dateOfBirth: BIRTH_INIT_DATA,
  addresses: [
    {
      country: validCountries[0],
      city: '',
      state: '',
      postalCode: '',
      streetName: '',
    },
    {
      country: validCountries[0],
      city: '',
      state: '',
      postalCode: '',
      streetName: '',
    },
  ],
};

const Registration: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [shippingAddress, setShippingAddress] = useState<boolean>(false);
  const [billingAddress, setBillingAddress] = useState<boolean>(false);
  const [billingField, setBillingField] = useState<boolean>(true);

  const { authenticationMode, id } = useAppSelector(
    (state) => state.userDataSlice.data
  );

  useEffect(() => {
    if (authenticationMode === 'Password') {
      navigate(PathNames.index, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticationMode]);

  return (
    <div className={styles.register}>
      <h1 className={styles.title}>REGISTRATION</h1>
      <Formik<CustomerDraft>
        initialValues={initialValues}
        validationSchema={RegistrationSchema}
        onSubmit={(value: CustomerDraft) => {
          const updateAddress: IDefaultAddress = {
            isSameBillingFieldAsShipping: billingField,
            defaultShippingAddress: shippingAddress,
            defaultBillingAddress: billingAddress,
          };
          const formData = validateAddresses(value, updateAddress);
          dispatch(
            registerUser({
              registrationData: { ...formData, anonymousId: id || undefined },
            })
          );
        }}
      >
        {({ errors, touched }) => (
          <Form method="post" action="register" className={styles.form}>
            <div className={styles.name__container}>
              <div className={styles.input__container}>
                <label htmlFor="firstName" className={styles.label}>
                  First Name
                </label>
                <Field
                  id="firstName"
                  name="firstName"
                  placeholder="First Name*"
                  className={styles.input}
                />
                {errors.firstName && touched.firstName && (
                  <div className={styles.errorValid}>{errors.firstName}</div>
                )}
              </div>
              <div className={styles.input__container}>
                <label htmlFor="lastName" className={styles.label}>
                  Last Name
                </label>
                <Field
                  id="lastName"
                  name="lastName"
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
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  placeholder="email*"
                  className={styles.input}
                />
                {errors.email && touched.email && (
                  <div className={styles.errorValid}>{errors.email}</div>
                )}
              </div>
              <div className={styles.input__container}>
                <label htmlFor="password" className={styles.label}>
                  Password
                </label>
                <Field
                  id="password"
                  type="password"
                  name="password"
                  placeholder="password*"
                  className={styles.input}
                />
                {errors.password && touched.password && (
                  <div className={styles.errorValid}>{errors.password}</div>
                )}
              </div>
            </div>
            <Select />
            <div className={styles.address__container}>
              <Address
                blockTitle="Shipping address"
                field={0}
                address={shippingAddress}
                setAddress={setShippingAddress}
              />
              {!billingField && (
                <Address
                  blockTitle="Billing address"
                  field={1}
                  address={billingAddress}
                  setAddress={setBillingAddress}
                />
              )}
            </div>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                checked={billingField}
                onChange={() => {
                  setBillingField(!billingField);
                  setBillingAddress(false);
                }}
              />
              <span>same shipping and billing addresses</span>
            </div>
            <button
              type="submit"
              onClick={() => setOpen(true)}
              className={styles.button}
            >
              Register
            </button>
            <AlertSnackBar open={open} setOpen={setOpen} />
          </Form>
        )}
      </Formik>
      <NavigateToLogin />
    </div>
  );
};

export default Registration;
