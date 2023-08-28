import styles from './wrapper.module.scss';

const Wrapper = ({ children }: { children: JSX.Element }): JSX.Element => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
