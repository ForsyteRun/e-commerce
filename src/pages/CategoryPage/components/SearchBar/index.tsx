import { InputAdornment, TextField, IconButton } from '@mui/material';
import { Close, Search } from '@mui/icons-material';
import { useState } from 'react';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  return (
    <div className={styles.searchContainer}>
      <IconButton
        onClick={toggleSearch}
        className={`${styles.searchIcon} ${
          isSearchVisible ? styles.hidden : ''
        }`}
      >
        <Search sx={{ fill: 'rgba(0, 0, 0, 0.54)' }} />
      </IconButton>
      <TextField
        variant="outlined"
        size="small"
        fullWidth
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={`${styles.searchField} ${
          isSearchVisible ? styles.visible : ''
        }`}
        sx={{
          '& fieldset': {
            border: '1px solid #eaebed',
            borderRadius: '12px',
            '&:hover': {
              border: '1px solid #1976d2',
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <Close
                className={styles.closeIcon}
                onClick={toggleSearch}
                sx={{ fill: 'rgba(0, 0, 0, 0.54)' }}
              />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;
