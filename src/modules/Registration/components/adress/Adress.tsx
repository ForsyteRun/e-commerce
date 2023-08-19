import { Field, FormikErrors, FormikValues, useFormikContext } from 'formik';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import styles from './adress.module.scss';
import validCountries from './constants';
import validateCity from './validation/validateCity';
import validatePostCode from './validation/validatePostCode';
import validateStreet from './validation/validateStreet';

interface IAdress {
  blockTitle: string;
  field: number;
  adress: boolean;
  setAdress: Dispatch<SetStateAction<boolean>>;
}

const Adress: React.FC<IAdress> = ({
  blockTitle,
  field,
  setAdress,
  adress,
}: IAdress): JSX.Element => {
  const { errors, touched } = useFormikContext<FormikValues>();

  const errorAddresses = errors.addresses as FormikErrors<BaseAddress[]>;
  const touchedAddresses = touched.addresses as FormikErrors<BaseAddress[]>;

  const fieldName = `addresses[${field}].city`;
  const fieldStreetName = `addresses[${field}].streetName`;
  const fieldCountry = `addresses[${field}].country`;
  const fieldPostalCode = `addresses[${field}].postalCode`;

  return (
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
      <div className={styles.title}>{blockTitle}</div>
      <div className={styles.checkbox}>
        <input type="checkbox" onChange={() => setAdress(!adress)} />
        <span>set as default {blockTitle}</span>
      </div>
    </div>
  );
};

export default Adress;
