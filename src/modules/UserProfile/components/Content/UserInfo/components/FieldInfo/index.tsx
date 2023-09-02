import { Stack } from '@mui/material';
import { IFieldInfo } from 'modules/UserProfile/types';
import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import FieldInfoShown from './components/FieldInfoShown';
import SingleFormField from './components/SingleFormField.tsx';
import styles from './fieldInfo.module.scss';

const FieldInfo: React.FC<IFieldInfo> = ({ value, title, validation }) => {
  const [openSingleForm, setOpenSingleForm] = React.useState(false);

  return (
    <Stack
      sx={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
      className={styles.info}
    >
      {!openSingleForm ? (
        <FieldInfoShown
          title={title}
          value={value}
          setOpenSingleForm={setOpenSingleForm}
        />
      ) : (
        <SingleFormField
          title={title}
          validation={validation}
          setOpenSingleForm={setOpenSingleForm}
        />
      )}
      {openSingleForm && (
        <ClearIcon
          fontSize="large"
          sx={{ cursor: 'pointer' }}
          onClick={() => setOpenSingleForm(false)}
        />
      )}
    </Stack>
  );
};

export default FieldInfo;
