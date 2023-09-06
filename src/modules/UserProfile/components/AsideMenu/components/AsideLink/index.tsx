import { NavLink } from 'react-router-dom';
import React from 'react';
import styles from './AsideLink.module.scss';
import { IAsideLink } from '../../types';

const AsideLink: React.FC<IAsideLink> = ({ title, path, end = false }) => {
  const activeLink = ({ isActive }: Record<string, boolean>) =>
    isActive ? styles.active__link : '';

  return (
    <NavLink to={path} end={end} className={activeLink}>
      {title}
    </NavLink>
  );
};

export default AsideLink;
