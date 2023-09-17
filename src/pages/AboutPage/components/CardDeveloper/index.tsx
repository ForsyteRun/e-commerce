import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import githubLogo from 'assets/images/svg/github-mark.svg';
import {
  cardContentStyles,
  cardMediaStyles,
  cardStyles,
} from 'pages/AboutPage/constants/aboutPageStyles';
import { DevelopersData } from 'pages/AboutPage/types';
import styles from './CardDeveloper.module.scss';

const CardDeveloper = ({
  name,
  image,
  role,
  github,
  bio,
  contribution,
}: DevelopersData) => {
  return (
    <Card sx={cardStyles}>
      <div className={styles.media}>
        <CardMedia
          component="img"
          alt={name}
          image={image}
          sx={cardMediaStyles}
        />
        <div className={styles.caption}>
          <p className={styles.name}>{name}</p>
          <p className={styles.role}>Role: {role}</p>
          <div className={styles.github}>
            <img
              src={githubLogo}
              alt="github logo"
              className={styles.githubLogo}
            />
            <span>Github:</span>
            <a
              href={`https://github.com/${github}`}
              className={styles.githubLink}
              title="github"
              target="_blank"
              rel="noreferrer"
            >
              {github}
            </a>
          </div>
        </div>
      </div>
      <CardContent sx={cardContentStyles}>
        <div className={styles.bio}>
          <h3 className={styles.title}>Bio:</h3>
          <div className={styles.text}>{bio}</div>
        </div>
        <div className={styles.contribution}>
          <h3 className={styles.title}>Contribution:</h3>
          <div className={styles.text}>{contribution}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardDeveloper;
