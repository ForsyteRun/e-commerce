import CardDeveloper from './components/CardDeveloper';
import developersData from './constants/developersData';
import styles from './AboutPage.module.scss';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      {developersData.map((developer) => {
        const { name, image, role, github, bio, contribution } = developer;
        return (
          <CardDeveloper
            key={name}
            name={name}
            image={image}
            role={role}
            github={github}
            bio={bio}
            contribution={contribution}
          />
        );
      })}
    </div>
  );
};

export default AboutPage;
