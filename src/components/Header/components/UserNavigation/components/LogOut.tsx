import { Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { createAnonymousUser } from 'store/userDataSlice/thunks';
import navButtonStyles from 'UI/NavLinkButton/navButtonStyles';
import Box from '@mui/material/Box';
import styles from './LogOut.module.scss';
import Profile from '../../Profile';

const LogOut = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.userDataSlice);
  const isPending = loading === 'pending';

  const logoutHandler = (): void => {
    dispatch(createAnonymousUser());
  };

  return (
    <Box className={styles.header__navigation}>
      <Button
        disabled={isPending}
        onClick={logoutHandler}
        sx={navButtonStyles}
        variant="contained"
      >
        Logout
      </Button>
      <Profile />
    </Box>
  );
};

export default LogOut;
