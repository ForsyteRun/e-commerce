import { CardContent, Typography } from '@mui/material';
import formatPrintAttributes from '../../helpers/formatPrintAttributes';
import skuStyles from './skuStyles';
import styles from './ProductCardContent.module.scss';
import { IProductCardContent } from '../../types';

const ProductCardContent = ({ attributes, sku, name }: IProductCardContent) => {
  return (
    <CardContent className={styles.cardInfo}>
      <Typography
        variant="h5"
        className={styles.title}
        sx={{ fontSize: '1rem', fontWeight: 700, margin: '10px 0' }}
      >
        {name}
      </Typography>
      <Typography sx={skuStyles}>{`SKU: ${sku}`}</Typography>
      {attributes && (
        <div className={styles.attributes}>
          {formatPrintAttributes(attributes)}
        </div>
      )}
    </CardContent>
  );
};

export default ProductCardContent;
