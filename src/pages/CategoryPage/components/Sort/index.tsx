/* eslint-disable react/prop-types */
import { Select, MenuItem } from '@mui/material';
import styles from './Sort.module.scss';

const Sort: React.FC<{
  sortOption: string;
  setSortOption: (option: string) => void;
}> = ({ sortOption, setSortOption }) => {
  return (
    <div className={styles.container}>
      <Select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        displayEmpty
        sx={{
          backgroundColor: 'white',
          borderRadius: '10px',
          '& fieldset': {
            border: '1px solid #eaebed',
          },
        }}
      >
        <MenuItem value="default">Default</MenuItem>
        <MenuItem value="priceAsc">Sort By: Price - Low to High</MenuItem>
        <MenuItem value="priceDesc">Sort By: Price - High to Low</MenuItem>
      </Select>
    </div>
  );
};

export default Sort;
