import React from 'react';
import styles from './SnackBar.module.scss';
import { ISnackBar } from './types';

const SnackBar: React.FC<ISnackBar> = ({ title, disabled }) => {
  return (
    <div>
      {disabled && (
        <div className={styles.container}>
          <div className={styles.loading} />
          <div className={styles.title}>{title}</div>
        </div>
      )}
    </div>
  );
};

export default SnackBar;
