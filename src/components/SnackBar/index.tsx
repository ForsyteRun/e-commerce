/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SnackBar.module.scss';
import { ISnackBar, Timeout } from './types';
import { PathNames } from '../../types';

const SnackBar: React.FC<ISnackBar> = ({ title, color, isOk, setStatus }) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add(styles.hidden);
    let timer: Timeout;

    if (isOk) {
      timer = setTimeout(() => {
        navigate(PathNames.index);
        setStatus('');
      }, 2000);
    } else {
      timer = setTimeout(() => {
        setStatus('');
      }, 4000);
    }

    return () => {
      document.body.classList.remove(styles.hidden);
      clearTimeout(timer);
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
