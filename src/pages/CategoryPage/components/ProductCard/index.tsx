import DiscountIcon from '@mui/icons-material/Discount';
import { Card, CardActions, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { IProductData, PathNames } from 'types';
import cardStyles from './cardStyle';
import styles from './ProductCard.module.scss';
import {
  ProductImage,
  ProductCardContent,
  AddToCartButton,
} from './components';

const ProductCard = ({ data }: { data: IProductData }) => {
  const { name, images, price, attributes, sku } = data;
  const image = images ? images[0] : undefined;

  return (
    <Card component={NavLink} to={PathNames.index} sx={cardStyles}>
      <ProductImage name={name} url={image} />
      <ProductCardContent attributes={attributes} name={name} sku={sku} />
      <CardActions className={styles.cardActions}>
        {price && (
          <div className={styles.priceInfo}>
            <Typography
              className={styles.value}
              sx={{
                fontWeight: price.discounted ? 500 : 700,
                fontSize: price.discounted ? '1rem' : '1.25rem',
                textDecoration: price.discounted ? 'line-through' : 'none',
                opacity: price.discounted ? 0.6 : 1,
              }}
            >
              {`${price.net} €`}
            </Typography>
            {price.discounted && (
              <Typography
                className={styles.discount}
                sx={{
                  fontWeight: 700,
                  fontSize: '1.25rem',
                }}
              >
                <DiscountIcon
                  fontSize="medium"
                  className={styles.discountIcon}
                />
                {`${price.discounted} €`}
              </Typography>
            )}
          </div>
        )}
        <AddToCartButton />
      </CardActions>
    </Card>
  );
};

export default ProductCard;
