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
import { IProductData } from 'types';
import attributesToDisplay from './constants';
import buttonStyles from './helpers';
import styles from './ProductCard.module.scss';

const ProductCard: React.FC<{
  data: IProductData;
}> = ({ data }) => {
  const { name, images, price, attributes } = data;

  return (
    <Card
      className={styles.card}
      sx={{
        borderRadius: '10px',
        boxShadow: 'none',
      }}
    >
      <div className={styles.productImage}>
        {images && (
          <img src={images[0]} alt="printer" className={styles.image} />
        )}
      </div>
      <CardContent className={styles.cardInfo}>
        <Typography
          variant="h5"
          className={styles.title}
          sx={{ fontWeight: '700' }}
        >
          <NavLink to="/" className={styles.linkName}>
            {name}
          </NavLink>
        </Typography>
        {attributes && (
          <div className={styles.attributes}>
            <ul className={styles.list}>
              {attributesToDisplay
                .filter((attributeName) => attributes[attributeName])
                .map((attributeName) => (
                  <li key={attributeName} className={styles.listItem}>
                    <span className={styles.attributeName}>
                      {attributeName}:
                    </span>
                    <span className={styles.attributeValue}>
                      {attributes[attributeName]}
                      {attributeName.endsWith('Speed') ? ' ppm' : ''}
                    </span>
                  </li>
                ))}
            </ul>
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
                fontSize: '20px',
                textDecoration: price.discounted ? 'line-through' : 'none',
              }}
            >
              {`€${price.net}`}
            </Typography>
            {price.discounted && (
              <Typography className={styles.discount}>
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
          View Product
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
