import { PromoCodesData } from 'pages/MainPage/types';
import styles from './PromoCodeCard.module.scss';

const PromoCodeCard = ({ data }: { data: PromoCodesData }) => {
  const { code, description, image } = data;
  return (
    <div className={styles.container}>
      <img src={image} alt="summer sale" className={styles.image} />
      <div className={styles.content}>
        <p className={styles.description}>{description}</p>
        <h5 className={styles.code}>{code}</h5>
      </div>
    </div>
  );
};

export default PromoCodeCard;
