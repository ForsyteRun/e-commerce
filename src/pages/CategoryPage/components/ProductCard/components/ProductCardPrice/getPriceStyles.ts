import { SxProps } from '@mui/material';
import { PriceType } from '../../types';

const getPriceStyles = (type: PriceType, isDiscountedNet: boolean): SxProps => {
  const netPriceStyles: SxProps = {
    color: '#213038',
    fontWeight: isDiscountedNet ? 500 : 700,
    fontSize: isDiscountedNet ? '1rem' : '1.25rem',
    lineHeight: 1,
    opacity: isDiscountedNet ? 0.6 : 1,
    textDecoration: isDiscountedNet ? 'line-through' : 'none',
  };

  const discountedPriceStyles: SxProps = {
    color: '#e5006d',
    display: 'inline-block',
    fontSize: '1.25rem',
    fontWeight: 700,
    lineHeight: 1,
  };

  return type === 'discounted' ? discountedPriceStyles : netPriceStyles;
};

export default getPriceStyles;
