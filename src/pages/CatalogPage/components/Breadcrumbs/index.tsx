import { useState, useEffect } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { mapSlugs, mapCrumbs } from './helpers';
import { ISlugParam } from './types';

const BreadcrumbsNavigation = () => {
  const { pathname } = useLocation();
  const [params, setParams] = useState<ISlugParam[]>([]);

  useEffect(() => {
    const formattedPathname = pathname.replace(/\/*$/, '');
    const slugs = formattedPathname.split('/');
    const mappedSlugs = mapSlugs(slugs);
    setParams(mappedSlugs);
  }, [pathname]);

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {mapCrumbs(params)}
    </Breadcrumbs>
  );
};

export default BreadcrumbsNavigation;
