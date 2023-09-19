import { DevelopersData } from '../types';
import styles from './TeamMember.module.scss';

const TeamMember = ({ developer }: { developer: DevelopersData }) => {
  const { name, role, about, image, github, contribution } = developer;
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <img className={styles.photo} src={image} alt={name} />
        <div className={styles.details}>
          <h3 className={styles.name}>{name}</h3>
          <h4 className={styles.role}>{role}</h4>
          <a
            href={`https://github.com/${github}`}
            className={styles.github}
            rel="noreferrer"
            target="_blank"
            title={`${name} GitHub`}
          >
            {github}
          </a>
          <div className={styles.contribution}>
            <h4 className={styles.contribution_title}>Contribution</h4>
            <ul className={styles.contribution_list}>
              {contribution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <h4 className={styles.about_title}>About</h4>
      <p className={styles.about}>{about}</p>
    </div>
  );
};

export default TeamMember;
