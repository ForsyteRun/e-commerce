import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Button, Collapse, ListItem } from '@mui/material';
import { useAppSelector } from 'hooks/useRedux';
import { PathNames, OnClickHandler, INavigationListItemProps } from 'types';
import ExpandArrow from './ExpandArrow';
import getChildren from '../../helpers/getChildren';
import { listItem, listButton } from './styles';

const NavigationListItem = ({ slug, id, name }: INavigationListItemProps) => {
  const { data } = useAppSelector((state) => state.categoriesSlice);
  const { category, '*': splat } = useParams();
  const [selected, setSelected] = useState(false);
  const formattedSplat = splat?.replace(/\/*$/, '');
  const location = formattedSplat ? `${category}/${formattedSplat}` : category;

  const selectedHandler: OnClickHandler = (e) => {
    if (!(e.target instanceof HTMLAnchorElement)) {
      setSelected(!selected);
    }
  };

  const children = getChildren(data, { slug, id, name })?.map((child) => (
    <NavigationListItem
      id={child.id}
      key={child.id}
      slug={child.slug}
      name={child.name}
    />
  ));
  const hasChildren = !!children && children.length > 0;

  return (
    <>
      <ListItem
        key={id}
        sx={{ ...listItem, cursor: hasChildren ? 'pointer' : 'auto' }}
        onClick={selectedHandler}
        alignItems="flex-start"
      >
        {hasChildren && <ExpandArrow isSelected={!!selected} />}
        <Button
          component={NavLink}
          disabled={slug === location}
          disableRipple
          sx={listButton}
          to={`${PathNames.catalog}/${slug}`}
          variant="text"
        >
          {name}
        </Button>
      </ListItem>
      {hasChildren && (
        <Collapse
          in={selected}
          timeout="auto"
          sx={{ ml: '2.25rem' }}
          unmountOnExit
        >
          {children}
        </Collapse>
      )}
    </>
  );
};

export default NavigationListItem;
