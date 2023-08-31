import { SxProps } from '@mui/material';

const getPriceStyles = (isDiscounted: boolean): SxProps => {
  const netPriceStyles: SxProps = {
    color: '#213038',
    fontWeight: isDiscounted ? 500 : 700,
    fontSize: isDiscounted ? '1rem' : '1.25rem',
    lineHeight: 1,
    opacity: isDiscounted ? 0.6 : 1,
    textDecoration: isDiscounted ? 'line-through' : 'none',
  };

  const discountedPriceStyles: SxProps = {
    alignItems: 'center',
    color: '#e5006d',
    display: 'flex',
    fontSize: '1.25rem',
    fontWeight: 700,
  };

  return isDiscounted ? discountedPriceStyles : netPriceStyles;
};

export default getPriceStyles;
