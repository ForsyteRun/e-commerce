/* eslint-disable react/no-array-index-key */
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs, Typography } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import { PathNames } from 'types';
import styles from './Breadcrumbs.module.scss';

const BreadcrumbsNavigation = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNameMap: { [key: string]: string } = {
    '/catalog': 'Catalog',
    '/catalog/printers': 'Printers',
    '/catalog/mfp': 'MFP',
    '/catalog/laser-printers': 'Laser Printers',
    '/catalog/inkjet-printers': 'Inkjet Printers',
    '/catalog/laser-mfps': 'Laser MFPs',
    '/catalog/inkjet-mfps': 'Inkjet MFPs',
  };

  return (
    <div className={styles.container}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <NavLink
          color="inherit"
          to={PathNames.index}
          className={styles.breadcrumbsLink}
        >
          Home
        </NavLink>
        {pathnames.map((_, index) => {
          const last: boolean = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return last ? (
            <Typography key={index} sx={{ fontSize: '14px' }}>
              {breadcrumbNameMap[to]}
            </Typography>
          ) : (
            <NavLink
              key={index}
              color="inherit"
              to={to}
              className={styles.breadcrumbsLink}
            >
              {breadcrumbNameMap[to]}
            </NavLink>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default BreadcrumbsNavigation;
