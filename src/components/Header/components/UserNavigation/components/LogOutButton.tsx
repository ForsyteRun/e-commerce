import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import useIconButtonColorTheme from 'helpers/useIconButtonColorTheme';
import { createAnonymousCart } from 'store/cartSlice/thunks';

const LogOutButton = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.userDataSlice);
  const isPending = loading === 'pending';

  const logoutHandler = (): void => {
    dispatch(createAnonymousCart());
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
