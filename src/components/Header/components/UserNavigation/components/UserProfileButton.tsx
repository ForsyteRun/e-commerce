import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import { PathNames } from 'types';
import useIconButtonColorTheme from './helpers/useIconButtonColorTheme';

const UserProfileButton = () => {
  const location = useLocation();

  const isProfilePath = location.pathname.startsWith('/profile');

  return (
    <IconButton
      component={NavLink}
      disabled={isProfilePath}
      to={PathNames.profile}
      sx={useIconButtonColorTheme('255, 86, 54')}
    >
      <AccountCircleIcon fontSize="large" />
    </IconButton>
  );
};

export default UserProfileButton;
