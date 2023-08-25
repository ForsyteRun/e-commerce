import { Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { createAnonymousUser } from 'store/userDataSlice/thunks';
import navButtonStyles from 'UI/NavLinkButton/navButtonStyles';

const LogOutButton = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.userDataSlice);
  const isPending = loading === 'pending';

  const logoutHandler = (): void => {
    dispatch(createAnonymousUser());
  };

  return (
    <Button
      disabled={isPending}
      onClick={logoutHandler}
      sx={navButtonStyles}
      variant="contained"
    >
      Logout
    </Button>
  );
};

export default LogOutButton;
