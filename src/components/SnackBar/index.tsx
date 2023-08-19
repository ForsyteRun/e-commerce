import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SnackBar.module.scss';
import { ISnackBar, Timeout } from './types';
import { getRegistrationAccessCode } from '../../store/registration/registrationAccess.slice';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { PathNames, RequestStatusCode } from '../../types';

const SnackBar: React.FC<ISnackBar> = ({ title, color }) => {
  const navigate = useNavigate();

  const { registrationAccessCodeSlice } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

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
      }, 3300);
    } else {
      timer = setTimeout(() => {
        dispatch(getRegistrationAccessCode(null));
      }, 4500);
    }

    return () => {
      document.body.classList.remove(styles.hidden);
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
