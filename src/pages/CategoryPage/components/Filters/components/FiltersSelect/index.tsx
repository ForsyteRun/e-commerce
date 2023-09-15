import {
  Select,
  MenuItem,
  SelectChangeEvent,
  OutlinedInput,
  FormControl,
  InputLabel,
} from '@mui/material';
import { capitalizeAll } from 'helpers';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { setFilters } from 'store/filtersSlice';
import styles from './FiltersSelect.module.scss';
import { IFiltersSelectProps } from './types';

const FiltersSelect = ({ by }: IFiltersSelectProps) => {
  const dispatch = useAppDispatch();
  const attributesData = useAppSelector((state) => state.attributesSlice.data);

  const formattedAttributeName = capitalizeAll(by);
  const defaultValue = '';
  const selectedValue = useAppSelector(
    (state) => state.filtersSlice.attributes[by] || defaultValue
  );

  const attributeValues = attributesData?.map(
    (attribute) => attribute?.[formattedAttributeName]
  );
  const uniqueAttributeValues = [...new Set(attributeValues)];

  const handleChange = (event: SelectChangeEvent<string>) => {
    const newValue = event.target.value;
    dispatch(
      setFilters({
        attributeName: by,
        attributeValue: newValue,
      })
    );
  };

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{formattedAttributeName}</h4>
      <FormControl sx={{ width: '100%' }}>
        <InputLabel id="filters-select-label">
          {formattedAttributeName}
        </InputLabel>
        {uniqueAttributeValues.length && (
          <Select
            labelId="filters-select-label"
            id="filters-select"
            value={selectedValue}
            defaultValue={defaultValue}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            input={<OutlinedInput label={formattedAttributeName} />}
          >
            {uniqueAttributeValues.map(
              (product) =>
                typeof product === 'string' && (
                  <MenuItem key={product} value={product}>
                    {product}
                  </MenuItem>
                )
            )}
          </Select>
        )}
      </FormControl>
    </div>
  );
};

export default FiltersSelect;
