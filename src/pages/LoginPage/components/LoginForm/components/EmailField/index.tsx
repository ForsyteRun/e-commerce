import { Field } from 'formik';
import { LoginEmailFieldProps } from '../../../../../../types';
import validateEmail from '../../helpers/validateEmail';
import styles from './EmailField.module.scss';

function EmailField({
  values,
  handleChange,
  handleBlur,
}: LoginEmailFieldProps): JSX.Element {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor="email" className={styles.label}>
        <span>Email</span>
      </label>
      <Field
        type="email"
        name="email"
        id="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="user@example.com"
        className={styles.inputEmail}
        validate={validateEmail}
      />
    </div>
  );
}

export default EmailField;
