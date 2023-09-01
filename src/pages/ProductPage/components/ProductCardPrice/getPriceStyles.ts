import { SxProps } from '@mui/material';
import { PriceType } from './types';

const getPriceStyles = (type: PriceType, isDiscountedNet: boolean): SxProps => {
  const netPriceStyles: SxProps = {
    color: '#213038',
    fontWeight: isDiscountedNet ? 500 : 700,
    fontSize: isDiscountedNet ? '1.25rem' : '1.5rem',
    lineHeight: 1,
    opacity: isDiscountedNet ? 0.6 : 1,
    textAlign: 'right',
    textDecoration: isDiscountedNet ? 'line-through' : 'none',
    '@media screen and (max-width: 425px)': {
      fontSize: isDiscountedNet ? '1.0rem' : '1.25rem',
    },
  };

  const discountedPriceStyles: SxProps = {
    color: '#e5006d',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.25rem',
    fontWeight: 700,
    lineHeight: 1,
    '@media screen and (max-width: 425px)': {
      fontSize: '1.0rem',
    },
  };

  return type === 'discounted' ? discountedPriceStyles : netPriceStyles;
};

export default getPriceStyles;
