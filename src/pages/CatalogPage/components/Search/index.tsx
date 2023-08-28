import { InputAdornment, TextField } from '@mui/material';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const Search = () => {
  return (
    <TextField
      id="input-with-icon-textfield"
      placeholder="search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchSharpIcon />
          </InputAdornment>
        ),
      }}
      variant="standard"
    />
  );
};

export default Search;
