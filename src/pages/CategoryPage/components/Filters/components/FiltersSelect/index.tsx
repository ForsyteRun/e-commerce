import {
  Select,
  MenuItem,
  SelectChangeEvent,
  OutlinedInput,
  FormControl,
  InputLabel,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { setFilters } from 'store/filtersSlice';
import formatAttributeName from '../../helpers';
import styles from './FiltersSelect.module.scss';

const FiltersSelect = ({ by }: { by: string }) => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.attributesSlice);
  const defaultValue = '';
  const selectedValue = useAppSelector(
    (state) => state.filtersSlice.attributes[by] || defaultValue
  );

  const formattedName = formatAttributeName(by);
  const attributesToDisplay = data?.map(
    (product) => product.attributes?.[formattedName]
  );
  const uniqueAttributes = [...new Set(attributesToDisplay)];

  const handleChange = (event: SelectChangeEvent<string>) => {
    const newValue = event.target.value;
    const attributeName = by.toLowerCase();
    dispatch(
      setFilters({
        attributeName,
        attributeValue: newValue,
      })
    );
  };

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{formattedName}</h4>
      <FormControl sx={{ width: '100%' }}>
        <InputLabel id="filters-select-label">{formattedName}</InputLabel>
        <Select
          labelId="filters-select-label"
          id="filters-select"
          value={selectedValue}
          defaultValue={defaultValue}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          input={<OutlinedInput label={formattedName} />}
        >
          {uniqueAttributes?.map((product, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <MenuItem key={index} value={String(product)}>
              {product}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default FiltersSelect;
