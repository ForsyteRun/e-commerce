import TeamMember from './TeamMember';
import developersData from './constants/developersData';
import styles from './AboutPage.module.scss';

const AboutPage = () => {
  return (
    <>
      <h2 className={styles.title}>Our team</h2>
      {developersData.map((developer) => {
        return <TeamMember key={developer.name} developer={developer} />;
      })}
    </>
  );
};

export default AboutPage;
