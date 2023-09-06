import { List } from '@mui/material';
import { ICategoryData } from 'types';
import NavigationListItem from '../NavigationListItem';
import styles from './styles';

interface INavigationList {
  categories: ICategoryData[];
}

const NavigationList = ({ categories }: INavigationList) => {
  return (
    <List component="ul" sx={styles}>
      {categories.map(({ slug, id, name }) => (
        <NavigationListItem key={id} slug={slug} id={id} name={name} />
      ))}
    </List>
  );
};

export default NavigationList;
