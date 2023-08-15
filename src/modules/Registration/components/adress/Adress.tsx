import { Field, FormikErrors, FormikValues, useFormikContext } from 'formik';
import { ReactNode } from 'react';
import { BaseAddress } from '@commercetools/platform-sdk';
import styles from './adress.module.scss';
import validCountries from './constants';
import validateCity from './validation/validateCity';
import validateStreet from './validation/validateStreet';
import validatePostCode from './validation/validatePostCode';

const Adress = (): JSX.Element => {
  const { errors, touched } = useFormikContext<FormikValues>();
  const errorAddresses = errors.addresses as FormikErrors<BaseAddress[]>;
  const touchedAddresses = touched.addresses as FormikErrors<BaseAddress[]>;

  return (
    <div className={styles.container}>
      <div className={styles.input__container}>
        <label htmlFor="city" className={styles.label}>
          City
        </label>
        <Field
          id="city"
          name="addresses[0].city"
          validate={validateCity}
          placeholder="City*"
          className={styles.input}
        />
        {errorAddresses && touchedAddresses && touchedAddresses[0]?.city && (
          <div className={styles.errorValid}>
            {errorAddresses[0]?.city as ReactNode}{' '}
          </div>
        )}
      </div>
      <div className={styles.input__container}>
        <label htmlFor="street" className={styles.label}>
          Street
        </label>
        <Field
          id="street"
          name="addresses[0].streetName"
          validate={validateStreet}
          placeholder="Street*"
          className={styles.input}
        />
        {errorAddresses &&
          touchedAddresses &&
          touchedAddresses[0]?.streetName && (
            <div className={styles.errorValid}>
              {errorAddresses[0]?.streetName as ReactNode}{' '}
            </div>
          )}
      </div>
      <div className={styles.input__container}>
        <label htmlFor="country" className={styles.label}>
          Country
        </label>
        <Field
          as="select"
          name="addresses[0].country"
          placeholder="Country*"
          className={styles.input}
        >
          {validCountries.map((day: string) => (
            <option value={day} key={day}>
              {day}
            </option>
          ))}
        </Field>
      </div>
      <div className={styles.input__container}>
        <label htmlFor="postalCode" className={styles.label}>
          PostCode
        </label>
        <Field
          id="postalCode"
          name="addresses[0].postalCode"
          validate={validatePostCode}
          placeholder="postalCode*"
          className={styles.input}
        />

        {errorAddresses &&
          touchedAddresses &&
          touchedAddresses[0]?.postalCode && (
            <div className={styles.errorValid}>
              {errorAddresses[0]?.postalCode as ReactNode}{' '}
            </div>
          )}
      </div>
    </div>
  );
};

export default Adress;
