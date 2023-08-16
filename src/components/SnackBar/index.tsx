/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import styles from './SnackBar.module.scss';
import { ISnackBar } from './types';

const SnackBar: React.FC<ISnackBar> = ({ title, color, setStatus }) => {
  useEffect(() => {
    document.body.classList.add(styles.hidden);

    setTimeout(() => {
      setStatus({ isError: false, isOk: false });
    }, 7000);

    return () => {
      document.body.classList.remove(styles.hidden);
    };
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.loading} />
        <div className={styles.title} style={{ backgroundColor: color }}>
          {title}
        </div>
      </div>
    </div>
  );
};

export default SnackBar;
