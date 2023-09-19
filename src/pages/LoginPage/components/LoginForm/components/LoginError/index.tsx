import React from 'react';
import WarningLoginIcon from 'assets/images/svg/warning-login.svg';
import { LoginErrorProps } from 'types';
import styles from './LoginError.module.scss';

const LoginError: React.FC<LoginErrorProps> = ({ message }) => (
  <div className={styles.error}>
    <img
      src={WarningLoginIcon}
      alt="error"
      className={styles.warningLoginIcon}
    />
    <span>{message}</span>
  </div>
);

export default LoginError;
