import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import RoutingError from '../pages/RoutingError';
import { PathNames } from '../types';

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
        element: <h1>Registration Page</h1>,
      },
      {
        path: PathNames.login,
        element: <h1>Log In Page</h1>,
      },
    ],
  },
]);

export default router;
