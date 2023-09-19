import { createBrowserRouter } from 'react-router-dom';
import { Registration } from 'modules/Registration';
import { PathNames } from 'types';
import {
  AddressBook,
  MyAccount,
  Password,
  UserInfo,
} from 'modules/UserProfile';
import {
  CatalogPage,
  CategoryPage,
  MainPage,
  CartPage,
  ProfilePage,
  Login,
  AboutPage,
  RoutingError,
} from 'pages';
import App from '../App';
import DynamicRoute from './components/DynamicRoute';
import { getCategoryData, checkCatalogPath } from './loaders';
import cartLoader from './loaders/cartLoader';

const router = createBrowserRouter([
  {
    path: PathNames.index,
    errorElement: <RoutingError />,
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
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
        element: <CatalogPage />,
        children: [
          {
            index: true,
            element: <CategoryPage />,
            loader: getCategoryData,
          },
          {
            path: PathNames.category,
            element: <CategoryPage />,
            loader: getCategoryData,
          },
          {
            path: `${PathNames.category}/*`,
            element: <DynamicRoute />,
            loader: checkCatalogPath,
          },
        ],
      },
      {
        path: PathNames.profile,
        element: <ProfilePage />,
        children: [
          {
            index: true,
            element: <MyAccount />,
          },
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
      {
        path: PathNames.cart,
        element: <CartPage />,
        loader: cartLoader,
      },
      {
        path: PathNames.about,
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;
