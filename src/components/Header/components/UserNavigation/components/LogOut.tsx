import useApi from '../../../../../hooks/useApi';
import { useAppDispatch } from '../../../../../hooks/useRedux';
import useRefreshToken from '../../../../../hooks/useRefreshToken';
import { setUserLoginState } from '../../../../../store/userSlice';

const LogOut = () => {
  const { anonymousApi } = useApi();
  const dispatch = useAppDispatch();
  const { removeRefreshToken } = useRefreshToken();

  const logoutHandler = () => {
    anonymousApi
      .me()
      .carts()
      .get()
      .execute()
      .then(() => {
        dispatch(setUserLoginState(false));
        removeRefreshToken();
      })
      // eslint-disable-next-line no-console
      .catch(console.error);
  };

  return (
    <button className="button" onClick={logoutHandler} type="button">
      Logout
    </button>
  );
};

export default LogOut;
