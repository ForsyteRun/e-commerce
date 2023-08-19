import { useAppDispatch } from '../../../../../hooks/useRedux';
import { createAnonymousUser } from '../../../../../store/userDataSlice/thunks';

const LogOut = () => {
  const dispatch = useAppDispatch();

  const logoutHandler = (): void => {
    dispatch(createAnonymousUser());
  };

  return (
    <button className="button" onClick={logoutHandler} type="button">
      Logout
    </button>
  );
};

export default LogOut;
