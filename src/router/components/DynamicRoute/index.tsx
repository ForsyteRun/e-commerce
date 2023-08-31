import { useLoaderData } from 'react-router-dom';
import ProductPage from 'pages/ProductPage';
import CategoryPage from 'pages/CategoryPage';

const DynamicRoute = () => {
  const params = useLoaderData();

  return (
    <>
      {params === 'product' && <ProductPage />}
      {params === 'category' && <CategoryPage />}
    </>
  );
};

export default DynamicRoute;
