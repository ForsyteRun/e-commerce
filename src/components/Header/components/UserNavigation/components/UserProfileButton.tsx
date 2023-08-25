// import Box from '@mui/material/Box';
import { NavLink, useLocation } from 'react-router-dom';
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { PathNames } from 'types';

const UserProfileButton = () => {
  const { pathname } = useLocation();
  const isProfilePage = pathname === PathNames.profile;

  return (
    <IconButton
      component={NavLink}
      disabled={isProfilePage}
      to={PathNames.profile}
      sx={{
        color: 'rgba(255, 86, 54, 0.75)',
        ':hover': {
          backgroundColor: 'rgba(255, 86, 54, 0.07)',
        },
      }}
    >
      <AccountCircleIcon fontSize="large" />
    </IconButton>
  );
};

export default UserProfileButton;
