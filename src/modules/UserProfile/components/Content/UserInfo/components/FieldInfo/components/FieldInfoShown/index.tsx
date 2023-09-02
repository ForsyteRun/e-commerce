import ModeIcon from '@mui/icons-material/Mode';
import { Typography } from '@mui/material';
import React, { FC } from 'react';
import { IFieldInfoShown } from './types';

const FieldInfoShown: FC<IFieldInfoShown> = ({
  title,
  value,
  setOpenSingleForm,
}) => {
  return (
    <>
      <Typography variant="h5" sx={{ flexGrow: 1 }}>
        {title}
      </Typography>
      <Typography variant="h5" sx={{ flexBasis: '50%' }}>
        {value}
      </Typography>
      <ModeIcon
        sx={{ cursor: 'pointer' }}
        onClick={() => setOpenSingleForm(true)}
      />
    </>
  );
};

export default FieldInfoShown;
