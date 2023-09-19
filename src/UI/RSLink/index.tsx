import styles from './RSLink.module.scss';

const RSLink = ({ children }: { children: JSX.Element }) => {
  return (
    <a
      className={styles.rs_link}
      href="https://rs.school/js/"
      rel="noreferrer"
      target="_blank"
      title="RS School «JavaScript/Front-end»"
    >
      {children}
    </a>
  );
};

export default RSLink;
