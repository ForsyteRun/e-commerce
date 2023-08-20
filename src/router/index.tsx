import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/LoginPage';
import RoutingError from '../pages/RoutingError';
import { PathNames } from '../types';
import Registration from '../modules/Registration';

const router = createBrowserRouter([
  {
    path: PathNames.index,
    errorElement: <RoutingError />,
    element: <App />,
    children: [
      {
        index: true,
        path: PathNames.index,
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
    ],
  },
]);

export default router;
