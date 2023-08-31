import { Stack, Typography } from '@mui/material';
import React from 'react';
import ModeIcon from '@mui/icons-material/Mode';
import styles from './fieldInfo.module.scss';

interface IFieldInfo {
  value: string | undefined;
  title: string;
}

const FieldInfo: React.FC<IFieldInfo> = ({ value, title }) => {
  return (
    <Stack
      sx={{ flexDirection: 'row', justifyContent: 'space-between' }}
      className={styles.info}
    >
      <Typography variant="h5">{title}</Typography>
      <Typography variant="h5" sx={{ flexBasis: '50%' }}>
        {value}
      </Typography>
      <ModeIcon sx={{ cursor: 'pointer' }} />
    </Stack>
  );
};

export default FieldInfo;
