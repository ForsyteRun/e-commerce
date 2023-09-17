import RSSLogo from 'assets/images/svg/rss-logo.svg';
import Wrapper from 'UI/Wrapper';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <div className={styles.container}>
          <p className={styles.copyright}>© 2023 LizavetaTeam</p>
          <p className={styles.storeName}>Printerix - Online Printers Store</p>
          <div className={styles.link}>
            <a href="https://rs.school/js/" target="_blank" rel="noreferrer">
              <img src={RSSLogo} alt="logo" className={styles.rssLogo} />
            </a>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
