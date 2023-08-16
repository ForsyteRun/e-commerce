/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SnackBar.module.scss';
import { ISnackBar, Timeout } from './types';
import {
  AppDispatch,
  PathNames,
  RequestStatusCode,
  RootState,
} from '../../types';
import { getRegistrationAccessCode } from '../../store/registration/registrationAccess';

const SnackBar: React.FC<ISnackBar> = ({ title, color }) => {
  const navigate = useNavigate();

  const { registrationAccessCodeSlice } = useSelector(
    (state: RootState) => state
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    document.body.classList.add(styles.hidden);
    let timer: Timeout;

    if (
      registrationAccessCodeSlice.registrationAccessCode ===
      RequestStatusCode.Created
    ) {
      timer = setTimeout(() => {
        navigate(PathNames.index);
        dispatch(getRegistrationAccessCode(null));
      }, 2000);
    } else {
      timer = setTimeout(() => {
        dispatch(getRegistrationAccessCode(null));
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
