import { Outlet, createBrowserRouter } from 'react-router-dom';
import Login from 'pages/LoginPage';
import RoutingError from 'pages/RoutingError';
import Registration from 'modules/Registration';
import { PathNames } from 'types';
import ProfilePage from 'pages/ProfilePage';
import Catalog from 'pages/CatalogPage';
import ProductPage from 'pages/ProductPage';
import App from '../App';
import { getCategoryData, getProductData } from './loaders';

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
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Catalog />,
          },
          {
            path: `${PathNames.catalog}/:category`,
            element: <Outlet />,
            loader: getCategoryData,
            children: [
              {
                index: true,
                element: <h1>Category</h1>,
              },
              {
                path: `${PathNames.catalog}/:category/:product`,
                element: <ProductPage />,
                loader: getProductData,
              },
            ],
          },
        ],
      },
      {
        path: PathNames.profile,
        element: <ProfilePage />,
      },
    ],
  },
]);

export default router;
