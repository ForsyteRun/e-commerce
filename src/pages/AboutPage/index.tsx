import RSLogo from 'UI/RSLogo';
import RSLink from 'UI/RSLink';
import TeamMember from './TeamMember';
import developersData from './constants/developersData';
import styles from './AboutPage.module.scss';

const AboutPage = () => {
  return (
    <>
      <h2 className={styles.title}>Our team</h2>
      <p className={styles.team_description}>
        Our team was formed in the process of studying at{' '}
        <RSLink>
          <span>RS School</span>
        </RSLink>{' '}
        to carry out the final task project.
      </p>
      <RSLink>
        <RSLogo size="big" />
      </RSLink>
      {developersData.map((developer) => (
        <TeamMember key={developer.name} developer={developer} />
      ))}
    </>
  );
};

export default AboutPage;
