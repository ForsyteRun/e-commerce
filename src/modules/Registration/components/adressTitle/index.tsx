import React from 'react';
import styles from './AdressTitle.module.scss';

interface IAdressTitle {
  title: string;
}

const AdressTitle: React.FC<IAdressTitle> = ({ title }) => {
  return <div className={styles.container}>{title}</div>;
};

export default AdressTitle;
