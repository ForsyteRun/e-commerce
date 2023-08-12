/* eslint-disable jsx-a11y/label-has-associated-control */
import { Field, FormikValues, useFormikContext } from 'formik';
import { ReactNode } from 'react';
import style from './adress.module.scss';
import {
  validateCity,
  validateCountry,
  validatePostCode,
  validateStreet,
} from './validation';

function Adress(): JSX.Element {
  const { errors, touched } = useFormikContext<FormikValues>();

  return (
    <div className={style.container}>
      <div className={style.input__container}>
        <label htmlFor="city" className={style.label}>
          City
        </label>
        <Field
          name="city"
          validate={validateCity}
          placeholder="City*"
          className={style.input}
        />
        {errors.city && touched.city && (
          <div className={style.errorValid}>{errors.city as ReactNode}</div>
        )}
      </div>
      <div className={style.input__container}>
        <label htmlFor="street" className={style.label}>
          Street
        </label>
        <Field
          name="street"
          validate={validateStreet}
          placeholder="Street*"
          className={style.input}
        />
        {errors.street && touched.street && (
          <div className={style.errorValid}>{errors.street as ReactNode}</div>
        )}
      </div>
      <div className={style.input__container}>
        <label htmlFor="country" className={style.label}>
          Country
        </label>
        <Field
          name="country"
          validate={validateCountry}
          placeholder="Country*"
          className={style.input}
        />
        {errors.country && touched.country && (
          <div className={style.errorValid}>{errors.country as ReactNode}</div>
        )}
      </div>
      <div className={style.input__container}>
        <label htmlFor="postCode" className={style.label}>
          PostCode
        </label>
        <Field
          name="postCode"
          validate={validatePostCode}
          placeholder="PostCode*"
          className={style.input}
        />
        {errors.postCode && touched.postCode && (
          <div className={style.errorValid}>{errors.postCode as ReactNode}</div>
        )}
      </div>
    </div>
  );
}

export default Adress;
