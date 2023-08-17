import { useLocation, useNavigate } from 'react-router-dom';
import useApi from '../../../../../hooks/useApi';
import { useAppDispatch } from '../../../../../hooks/useRedux';
import useRefreshToken from '../../../../../hooks/useRefreshToken';
import { setUserLoginState } from '../../../../../store/userSlice';
import { PathNames } from '../../../../../types';

const LogOut = () => {
  const { anonymousApi } = useApi();
  const dispatch = useAppDispatch();
  const { removeRefreshToken } = useRefreshToken();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const logoutHandler = () => {
    anonymousApi
      .me()
      .carts()
      .get()
      .execute()
      .then(() => {
        dispatch(setUserLoginState(false));
        removeRefreshToken();
        if (pathname === PathNames.login || pathname === PathNames.register) {
          navigate(PathNames.index);
        }
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
