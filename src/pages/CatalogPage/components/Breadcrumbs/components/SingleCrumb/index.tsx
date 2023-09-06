import { NavLink } from 'react-router-dom';
import styles from './SingleCrumb.module.scss';

interface ICrumbProps {
  to: string;
  name: string;
}

const SingleCrumb = ({ to, name }: ICrumbProps) => {
  return (
    <NavLink color="inherit" to={to} className={styles.link}>
      {name}
    </NavLink>
  );
};

export default SingleCrumb;
