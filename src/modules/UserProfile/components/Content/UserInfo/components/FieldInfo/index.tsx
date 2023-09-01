import { Stack } from '@mui/material';
import { IFieldInfo } from 'modules/UserProfile/types';
import React from 'react';
import FieldInfoShown from './components/FieldInfoShown';
import styles from './fieldInfo.module.scss';
import FieldInfoSingleForm from './components/FieldInfoSingleForm';

const FieldInfo: React.FC<IFieldInfo> = ({
  value,
  title,
  validation,
  setUserData,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (values: Record<string, string>) => {
    setUserData(values);
    setOpen(false);
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
        <FieldInfoShown title={title} value={value} setOpen={setOpen} />
      ) : (
        <FieldInfoSingleForm
          title={title}
          submit={handleSubmit}
          validation={validation}
        />
      )}
    </Stack>
  );
};

export default FieldInfo;
