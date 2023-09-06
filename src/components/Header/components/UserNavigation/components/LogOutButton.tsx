import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { createAnonymousUser } from 'store/userDataSlice/thunks';
import useIconButtonColorTheme from 'helpers/useIconButtonColorTheme';

const LogOutButton = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.userDataSlice);
  const isPending = loading === 'pending';

  const logoutHandler = (): void => {
    dispatch(createAnonymousUser());
  };

  return (
    <IconButton
      color="primary"
      disabled={isPending}
      onClick={logoutHandler}
      sx={useIconButtonColorTheme('25, 118, 210')}
      size="large"
    >
      <LogoutIcon />
    </IconButton>
  );
};

export default LogOutButton;
