import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';

const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  event.preventDefault();
  // eslint-disable-next-line no-console
  console.info('You clicked a breadcrumb.');
};

const BreadCrumbs: React.FC = () => {
  return (
    <Box role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ margin: '0 auto' }}>
        <Link underline="hover" color="inherit" href="/">
          main
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          catalog
        </Link>
        <Typography color="text.primary">cards</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default BreadCrumbs;
