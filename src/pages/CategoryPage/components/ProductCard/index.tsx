/* eslint-disable react/prop-types */
import DiscountIcon from '@mui/icons-material/Discount';
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { IProductData } from 'types';
import buttonStyles from './helpers/buttonStyles';
import formatPrintAttributes from './helpers/formatPrintAttributes';
import styles from './ProductCard.module.scss';

const ProductCard: React.FC<{
  data: IProductData;
}> = ({ data }) => {
  const navigate = useNavigate();
  const { name, images, price, attributes, sku } = data;

  const handleCardClick = () => {
    navigate(`/`);
  };

  // const handleAddToCartClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.stopPropagation();
  //   navigate('/');
  // };

  return (
    <Card
      className={styles.card}
      sx={{
        borderRadius: '10px',
        boxShadow: 'none',
        transition: 'box-shadow 0.2s ease-in-out',
        '&:hover': {
          boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
        },
      }}
      onClick={handleCardClick}
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
          sx={{ fontSize: '16px', fontWeight: '700', margin: '10px 0' }}
        >
          {name}
        </Typography>
        <Typography
          className={styles.sku}
          sx={{
            backgroundColor: 'rgba(103, 58, 183, 0.2)',
            borderRadius: '5px',
            borderLeft: '5px solid #673ab7',
            color: '#000000',
            fontSize: '12px',
            maxWidth: 'max-content',
            padding: '3px',
          }}
        >
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
        <Button
          variant="outlined"
          sx={buttonStyles}
          // onClick={handleAddToCartClick}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
