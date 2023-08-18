import { BaseAddress } from '@commercetools/platform-sdk';
import { Field, FormikErrors, FormikValues, useFormikContext } from 'formik';
import { ReactNode } from 'react';
import styles from './adress.module.scss';
import validCountries from './constants';
import validateCity from './validation/validateCity';
import validatePostCode from './validation/validatePostCode';
import validateStreet from './validation/validateStreet';

const BillingAdress: React.FC = (): JSX.Element => {
  const { errors, touched } = useFormikContext<FormikValues>();
  const errorAddresses = errors.addresses as FormikErrors<BaseAddress[]>;
  const touchedAddresses = touched.addresses as FormikErrors<BaseAddress[]>;

  return (
    <div className={styles.container}>
      <div className={styles.input__container}>
        <Field
          name="addresses[0].city"
          validate={validateCity}
          placeholder="City*"
          className={styles.input}
        />
        {errorAddresses && touchedAddresses && touchedAddresses[0]?.city && (
          <div className={styles.errorValid}>
            {errorAddresses[0]?.city as ReactNode}
          </div>
        )}
      </div>
      <div className={styles.input__container}>
        <Field
          name="addresses[0].streetName"
          validate={validateStreet}
          placeholder="Street*"
          className={styles.input}
        />
        {errorAddresses &&
          touchedAddresses &&
          touchedAddresses[0]?.streetName && (
            <div className={styles.errorValid}>
              {errorAddresses[0]?.streetName as ReactNode}
            </div>
          )}
      </div>
      <div className={styles.input__container}>
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
        <Field
          name="addresses[0].postalCode"
          validate={validatePostCode}
          placeholder="postalCode*"
          className={styles.input}
        />

        {errorAddresses &&
          touchedAddresses &&
          touchedAddresses[0]?.postalCode && (
            <div className={styles.errorValid}>
              {errorAddresses[0]?.postalCode as ReactNode}
            </div>
          )}
      </div>
      <div className={styles.title}>Billing adress</div>
    </div>
  );
};

export default BillingAdress;
