/* eslint-disable react/prop-types */
import DiscountIcon from '@mui/icons-material/Discount';
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { IProductData, PathNames } from 'types';
import buttonStyles from './helpers/buttonStyles';
import cardStyles from './helpers/cardStyle';
import formatPrintAttributes from './helpers/formatPrintAttributes';
import skuStyles from './helpers/skuStyles';
import styles from './ProductCard.module.scss';

const ProductCard: React.FC<{
  data: IProductData;
}> = ({ data }) => {
  const { name, images, price, attributes, sku } = data;

  return (
    <Card sx={cardStyles} component={NavLink} to={PathNames.index}>
      <div className={styles.productImage}>
        {images && (
          <img src={images[0]} alt="printer" className={styles.image} />
        )}
      </div>
      <CardContent className={styles.cardInfo}>
        <Typography
          variant="h5"
          className={styles.title}
          sx={{ fontSize: '16px', fontWeight: '700', margin: '10px 0' }}
        >
          {name}
        </Typography>
        <Typography className={styles.sku} sx={skuStyles}>
          {`SKU: ${sku}`}
        </Typography>
        {attributes && (
          <div className={styles.attributes}>
            {formatPrintAttributes(attributes)}
          </div>
        )}
      </CardContent>
      <CardActions className={styles.cardActions}>
        {price && (
          <div className={styles.priceInfo}>
            <Typography
              className={styles.value}
              sx={{
                fontWeight: '700',
                fontSize: '18px',
                textDecoration: price.discounted ? 'line-through' : 'none',
              }}
            >
              {`€${price.net}`}
            </Typography>
            {price.discounted && (
              <Typography
                className={styles.discount}
                sx={{
                  fontWeight: '700',
                  fontSize: '16px',
                }}
              >
                <DiscountIcon
                  fontSize="small"
                  className={styles.discountIcon}
                />
                {`€${price.discounted}`}
              </Typography>
            )}
          </div>
        )}
        <Button variant="outlined" sx={buttonStyles}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
