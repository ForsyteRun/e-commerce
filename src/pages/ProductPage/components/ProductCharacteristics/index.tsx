import { IAttributes } from 'types';
import { List, ListItem, ListItemText } from '@mui/material';
import {
  listStyles,
  listItemStyles,
  listItemTextStyles,
  primaryTypographyStyles,
  secondaryTypographyStyles,
} from './helpers/index';
import formatSecondaryValue from './helpers/formatSecondaryValue';

const ProductCharacteristics = ({
  attributes,
}: {
  attributes: IAttributes;
}) => {
  return (
    <List sx={listStyles}>
      {Object.keys(attributes).map((key) => (
        <ListItem key={key} sx={listItemStyles}>
          <ListItemText
            primary={key}
            secondary={formatSecondaryValue(key, attributes[key])}
            primaryTypographyProps={primaryTypographyStyles}
            secondaryTypographyProps={secondaryTypographyStyles}
            sx={listItemTextStyles}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ProductCharacteristics;
