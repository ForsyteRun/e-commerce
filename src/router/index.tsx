import { createBrowserRouter } from 'react-router-dom';
import Login from 'pages/LoginPage';
import RoutingError from 'pages/RoutingError';
import Registration from 'modules/Registration';
import { PathNames } from 'types';
import { AddressBook, UserInfo } from 'modules/UserProfile';
import Catalog from 'pages/CatalogPage';
import ProfilePage from 'pages/ProfilePage';
import Password from 'modules/UserProfile/components/Content/Password';
import App from '../App';

const router = createBrowserRouter([
  {
    path: PathNames.index,
    errorElement: <RoutingError />,
    element: <App />,
    children: [
      {
        index: true,
        element: <h1>Main Page</h1>,
      },
      {
        path: PathNames.register,
        element: <Registration />,
      },
      {
        path: PathNames.login,
        element: <Login />,
      },
      {
        path: PathNames.catalog,
        element: <Catalog />,
      },
      {
        path: PathNames.profile,
        element: <ProfilePage />,
        children: [
          {
            path: PathNames.profileInfo,
            element: <UserInfo />,
          },
          {
            path: PathNames.profileAddress,
            element: <AddressBook />,
          },
          {
            path: PathNames.profilePassword,
            element: <Password />,
          },
        ],
      },
    ],
  },
]);

export default router;
