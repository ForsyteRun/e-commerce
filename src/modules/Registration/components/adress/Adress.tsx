import { Dispatch, ReactNode, SetStateAction } from 'react';
import { BaseAddress } from '@commercetools/platform-sdk';
import { Field, FormikErrors, FormikValues, useFormikContext } from 'formik';
import { Box } from '@mui/material';
import styles from './address.module.scss';
import validCountries from './constants';
import {
  validateStreet,
  validateCity,
  validatePostCode,
  validateState,
} from './validation';

interface IAddress {
  blockTitle: string;
  field: number;
  address: boolean;
  setAddress: Dispatch<SetStateAction<boolean>>;
}

const Address: React.FC<IAddress> = ({
  blockTitle,
  field,
  setAddress,
  address,
}: IAddress) => {
  const { errors, touched } = useFormikContext<FormikValues>();

  const errorAddresses = errors.addresses as FormikErrors<BaseAddress[]>;
  const touchedAddresses = touched.addresses as FormikErrors<BaseAddress[]>;

  const fieldName = `addresses[${field}].city`;
  const fieldStreetName = `addresses[${field}].streetName`;
  const fieldCountry = `addresses[${field}].country`;
  const fieldPostalCode = `addresses[${field}].postalCode`;
  const fieldState = `addresses[${field}].state`;

  return (
    <Box sx={{ border: '1px solid #999' }}>
      <div className={styles.container}>
        <div className={styles.input__container}>
          <Field
            name={fieldName}
            validate={validateCity}
            placeholder="City*"
            className={styles.input}
          />
          {errorAddresses &&
            touchedAddresses &&
            touchedAddresses[field]?.city && (
              <div className={styles.errorValid}>
                {errorAddresses[field]?.city as ReactNode}
              </div>
            )}
        </div>
        <div className={styles.input__container}>
          <Field
            name={fieldStreetName}
            validate={validateStreet}
            placeholder="Street*"
            className={styles.input}
          />
          {errorAddresses &&
            touchedAddresses &&
            touchedAddresses[field]?.streetName && (
              <div className={styles.errorValid}>
                {errorAddresses[field]?.streetName as ReactNode}
              </div>
            )}
        </div>
        <div className={styles.input__container}>
          <Field
            as="select"
            name={fieldCountry}
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
            name={fieldState}
            validate={validateState}
            placeholder="State*"
            className={styles.input}
          />

          {errorAddresses &&
            touchedAddresses &&
            touchedAddresses[field]?.state && (
              <div className={styles.errorValid}>
                {errorAddresses[field]?.state as ReactNode}
              </div>
            )}
        </div>
        <div className={styles.input__container}>
          <Field
            name={fieldPostalCode}
            validate={validatePostCode}
            placeholder="postalCode*"
            className={styles.input}
          />

          {errorAddresses &&
            touchedAddresses &&
            touchedAddresses[field]?.postalCode && (
              <div className={styles.errorValid}>
                {errorAddresses[field]?.postalCode as ReactNode}
              </div>
            )}
        </div>
      </div>
      <div className={styles.title}>{blockTitle}</div>
      <div className={styles.checkbox}>
        <input type="checkbox" onChange={() => setAddress(!address)} />
        <span>default {blockTitle}</span>
      </div>
    </Box>
  );
};

export default Address;
