import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { createAnonymousUser } from 'store/userDataSlice/thunks';
import styles from 'styles/button.module.scss';

const LogOut = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.userDataSlice);
  const isPending = loading === 'pending';

  const logoutHandler = (): void => {
    dispatch(createAnonymousUser());
  };

  return (
    <button
      className={styles.button}
      disabled={isPending}
      onClick={logoutHandler}
      type="button"
    >
      Logout
    </button>
  );
};

export default LogOut;
