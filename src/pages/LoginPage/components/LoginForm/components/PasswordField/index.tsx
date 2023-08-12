import { Field } from 'formik';
import { LoginPasswordFieldProps } from '../../../../../../types';
import validatePassword from '../../helpers/validatePassword';
import styles from './PasswordField.module.scss';

function PasswordField({
  type,
  values,
  handleChange,
  handleBlur,
  togglePasswordVisibility,
  icon,
}: LoginPasswordFieldProps): JSX.Element {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor="password">
        <span>Password</span>
      </label>
      <div className={styles.inputFieldContainer}>
        <Field
          type={type}
          name="password"
          id="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Password"
          className={styles.inputPassword}
          validate={validatePassword}
        />
        <div className={styles.buttonContainer}>
          <button
            type="button"
            className={styles.togglePasswordButton}
            onClick={togglePasswordVisibility}
          >
            {icon}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PasswordField;
