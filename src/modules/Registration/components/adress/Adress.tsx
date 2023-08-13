/* eslint-disable jsx-a11y/label-has-associated-control */
import { Field, FormikValues, useFormikContext } from 'formik';
import { ReactNode } from 'react';
import styles from './adress.module.scss';
import { validateCity, validatePostCode, validateStreet } from './validation';
import validCountries from './constants';

function Adress(): JSX.Element {
  const { errors, touched } = useFormikContext<FormikValues>();

  return (
    <div className={styles.container}>
      <div className={styles.input__container}>
        <label htmlFor="city" className={styles.label}>
          City
        </label>
        <Field
          name="city"
          validate={validateCity}
          placeholder="City*"
          className={styles.input}
        />
        {errors.city && touched.city && (
          <div className={styles.errorValid}>{errors.city as ReactNode}</div>
        )}
      </div>
      <div className={styles.input__container}>
        <label htmlFor="street" className={styles.label}>
          Street
        </label>
        <Field
          name="street"
          validate={validateStreet}
          placeholder="Street*"
          className={styles.input}
        />
        {errors.street && touched.street && (
          <div className={styles.errorValid}>{errors.street as ReactNode}</div>
        )}
      </div>
      <div className={styles.input__container}>
        <label htmlFor="country" className={styles.label}>
          Country
        </label>
        <Field
          as="select"
          name="country"
          placeholder="Country*"
          className={styles.input}
        >
          {validCountries.map((day: string) => (
            <option value={day} key={day}>
              {day}
            </option>
          ))}
        </Field>
        {errors.country && touched.country && (
          <div className={styles.errorValid}>{errors.country as ReactNode}</div>
        )}
      </div>
      <div className={styles.input__container}>
        <label htmlFor="postCode" className={styles.label}>
          PostCode
        </label>
        <Field
          name="postCode"
          validate={validatePostCode}
          placeholder="PostCode*"
          className={styles.input}
        />

        {errors.postCode && touched.postCode && (
          <div className={styles.errorValid}>
            {errors.postCode as ReactNode}
          </div>
        )}
      </div>
    </div>
  );
}

export default Adress;
