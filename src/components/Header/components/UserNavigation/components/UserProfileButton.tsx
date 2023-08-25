// import Box from '@mui/material/Box';
import { NavLink, useLocation } from 'react-router-dom';
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { PathNames } from 'types';
import useIconButtonColorTheme from './helpers/useIconButtonColorTheme';

const UserProfileButton = () => {
  const { pathname } = useLocation();
  const isProfilePage = pathname === PathNames.profile;

  return (
    <IconButton
      component={NavLink}
      disabled={isProfilePage}
      to={PathNames.profile}
      sx={useIconButtonColorTheme('255, 86, 54')}
    >
      <AccountCircleIcon fontSize="large" />
    </IconButton>
  );
};

export default UserProfileButton;
