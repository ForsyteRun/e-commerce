import { Card } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { generateProductPath } from 'helpers/pathGenerators';
import { IProductData, PathNames } from 'types';
import cardStyles from './cardStyle';
import {
  ProductImage,
  ProductCardContent,
  ProductCardPrice,
} from './components';

const ProductCard = ({ data }: { data: IProductData }) => {
  const { name, images, price, attributes, sku, slug, categories } = data;
  const image = images ? images[0] : undefined;

  const path = generateProductPath(slug, categories[0]);
  const to = `${PathNames.catalog}/${path}`;

  return (
    <Card component={NavLink} to={to} sx={cardStyles}>
      <ProductImage name={name} url={image} />
      <ProductCardContent attributes={attributes} name={name} sku={sku} />
      {price && <ProductCardPrice price={price} />}
    </Card>
  );
};

export default ProductCard;
