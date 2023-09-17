import Wrapper from 'UI/Wrapper';
import RSLink from 'UI/RSLink';
import RSLogo from 'UI/RSLogo';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <div className={styles.container}>
          <p className={styles.copyright}>© 2023 LizavetaTeam</p>
          <p className={styles.storeName}>Printerix - Online Printers Store</p>
          <div className={styles.link}>
            <RSLink>
              <RSLogo size="small" />
            </RSLink>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
