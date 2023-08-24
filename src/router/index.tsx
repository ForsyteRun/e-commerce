import { createBrowserRouter } from 'react-router-dom';
import Login from 'pages/LoginPage';
import RoutingError from 'pages/RoutingError';
import Registration from 'modules/Registration';
import { PathNames } from 'types';
import App from '../App';

const router = createBrowserRouter([
  {
    path: PathNames.index,
    errorElement: <RoutingError />,
    element: <App />,
    children: [
      {
        index: true,
        errorElement: <RoutingError />,
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
        element: <h1>Catalog Page</h1>,
      },
      {
        path: PathNames.profile,
        element: <h1>Profile Page</h1>,
      },
    ],
  },
]);

export default router;
