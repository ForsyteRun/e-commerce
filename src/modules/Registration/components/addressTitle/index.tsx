import React from 'react';
import styles from './AddressTitle.module.scss';
import IAddressTitle from './types';

const AddressTitle: React.FC<IAddressTitle> = ({ title }) => {
  return <div className={styles.container}>{title}</div>;
};

export default AddressTitle;
