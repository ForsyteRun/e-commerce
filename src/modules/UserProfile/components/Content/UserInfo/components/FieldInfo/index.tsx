import { Snackbar, Stack } from '@mui/material';
import { IFieldInfo } from 'modules/UserProfile/types';
import React from 'react';
import FieldInfoShown from './components/FieldInfoShown';
import SingleFormField from './components/SingleFormField.tsx';
import styles from './fieldInfo.module.scss';

const FieldInfo: React.FC<IFieldInfo> = ({ value, title, validation }) => {
  const [openSingleForm, setOpenSingleForm] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

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
          setOpenModal={setOpenModal}
        />
      )}
      <Snackbar
        open={openModal}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Update"
      />
    </Stack>
  );
};

export default FieldInfo;
