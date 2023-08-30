import { Stack, Typography } from '@mui/material';
import React from 'react';
import styles from './fieldInfo.module.scss';

interface IFieldInfo {
  value: string | undefined;
}

const FieldInfo: React.FC<IFieldInfo> = ({ value }) => {
  return (
    <Stack
      sx={{ flexDirection: 'row', justifyContent: 'space-between' }}
      className={styles.info}
    >
      <Typography variant="h5">First Name</Typography>
      <Typography variant="h5" sx={{ flexBasis: '50%' }}>
        {value}
      </Typography>
    </Stack>
  );
};

export default FieldInfo;
