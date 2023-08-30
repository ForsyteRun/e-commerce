import { useLoaderData } from 'react-router-dom';
import ProductPage from 'pages/ProductPage';

const DynamicRoute = () => {
  const params = useLoaderData();

  return (
    <>
      {params === 'product' && <ProductPage />}
      {params === 'category' && <h1>SubCategory Page</h1>}
    </>
  );
};

export default DynamicRoute;
