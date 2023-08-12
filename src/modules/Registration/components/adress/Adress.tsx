/* eslint-disable jsx-a11y/label-has-associated-control */
import { Field } from 'formik';
import style from './adress.module.scss';
import validateAdress from './validation';

function Adress(): JSX.Element {
  return (
    <div className={style.container}>
      <div className={style.input__container}>
        <label htmlFor="City" className={style.label}>
          City
        </label>
        <Field
          name="City"
          validate={validateAdress}
          placeholder="City*"
          className={style.input}
        />
        {/* {errors.lastName && touched.lastName && (
        <div className={s.errorValid}>{errors.lastName}</div>
      )} */}
      </div>
      <div className={style.input__container}>
        <label htmlFor="Street" className={style.label}>
          Street
        </label>
        <Field
          name="Street"
          validate={validateAdress}
          placeholder="Street*"
          className={style.input}
        />
        {/* {errors.lastName && touched.lastName && (
        <div className={s.errorValid}>{errors.lastName}</div>
      )} */}
      </div>
      <div className={style.input__container}>
        <label htmlFor="Country" className={style.label}>
          Country
        </label>
        <Field
          name="Country"
          validate={validateAdress}
          placeholder="Country*"
          className={style.input}
        />
        {/* {errors.lastName && touched.lastName && (
        <div className={s.errorValid}>{errors.lastName}</div>
      )} */}
      </div>
      <div className={style.input__container}>
        <label htmlFor="PostCode" className={style.label}>
          PostCode
        </label>
        <Field
          name="PostCode"
          validate={validateAdress}
          placeholder="PostCode*"
          className={style.input}
        />
        {/* {errors.lastName && touched.lastName && (
        <div className={s.errorValid}>{errors.lastName}</div>
      )} */}
      </div>
    </div>
  );
}

export default Adress;
