import ClearIcon from '@mui/icons-material/Clear';
import { Stack } from '@mui/material';
import { IFieldInfo } from 'modules/UserProfile/types';
import { FC, useState } from 'react';
import FieldInfoShown from './components/FieldInfoShown';
import SingleFormField from './components/SingleFormField.tsx';
import styles from './fieldInfo.module.scss';

const FieldInfo: FC<IFieldInfo> = ({ value, title, validation }) => {
  const [openSingleForm, setOpenSingleForm] = useState(false);

  return (
    <Stack
      sx={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
