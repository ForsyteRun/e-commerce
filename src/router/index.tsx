import { Outlet, createBrowserRouter } from 'react-router-dom';
import Login from 'pages/LoginPage';
import RoutingError from 'pages/RoutingError';
import ProductPage from 'pages/ProductPage';
import Registration from 'modules/Registration';
import { PathNames } from 'types';
import Catalog from 'pages/CatalogPage';
import {
  AddressBook,
  UserInfo,
  UserProfileMainPage,
} from 'modules/UserProfile';
import Catalog from 'pages/CatalogPage';
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
            path: `${PathNames.category}`,
            element: <Outlet />,
            loader: getCategoryData,
            children: [
              {
                index: true,
                element: <h1>Category</h1>,
              },
              {
                path: `${PathNames.product}`,
                element: <ProductPage />,
                loader: getProductData,
              },
            ],
          },
        ],
      },
      {
        path: PathNames.profile,
        element: <UserProfileMainPage />,
      },
      {
        element: <UserProfileMainPage />,
        children: [
          {
            path: PathNames.profileInfo,
            element: <UserInfo />,
          },
          {
            path: PathNames.profileAddress,
            element: <AddressBook />,
          },
        ],
      },
    ],
  },
]);

export default router;
