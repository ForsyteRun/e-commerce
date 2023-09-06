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
import styles from './ProductCard.module.scss';

const ProductCard = ({ data }: { data: IProductData }) => {
  const { name, images, price, attributes, sku, slug, categories } = data;
  const image = images ? images[0] : undefined;

  const path = generateProductPath(slug, categories[0]);
  const to = `${PathNames.catalog}/${path}`;

  return (
    <Card sx={cardStyles}>
      <NavLink to={to} className={styles.link_to_product}>
        <ProductImage name={name} url={image} />
        <ProductCardContent attributes={attributes} name={name} sku={sku} />
      </NavLink>
      {price && <ProductCardPrice price={price} />}
    </Card>
  );
};

export default ProductCard;
