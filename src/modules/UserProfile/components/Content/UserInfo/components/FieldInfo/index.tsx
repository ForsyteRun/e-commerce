import { Stack, Typography, InputAdornment, Button } from '@mui/material';
import React from 'react';
import ModeIcon from '@mui/icons-material/Mode';
import TextField from '@mui/material/TextField';
import styles from './fieldInfo.module.scss';

interface IFieldInfo {
  value: string | undefined;
  title: string;
}
const FieldInfo: React.FC<IFieldInfo> = ({ value, title }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Stack
      sx={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
      className={styles.info}
    >
      {!open ? (
        <>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="h5" sx={{ flexBasis: '50%' }}>
            {value}
          </Typography>
          <ModeIcon sx={{ cursor: 'pointer' }} onClick={handleClick} />
        </>
      ) : (
        <TextField
          placeholder={`enter ${title}`}
          sx={{ width: '100%' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button>submit</Button>
              </InputAdornment>
            ),
          }}
        />
      )}
    </Stack>
  );
};

export default FieldInfo;
