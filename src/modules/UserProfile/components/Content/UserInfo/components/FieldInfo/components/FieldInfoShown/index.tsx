import ModeIcon from '@mui/icons-material/Mode';
import { Typography } from '@mui/material';
import { FC } from 'react';
import { IFieldInfoShown } from './types';

const FieldInfoShown: FC<IFieldInfoShown> = ({
  title,
  value,
  setOpenSingleForm,
}) => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          flex: 1,
          '@media screen and (max-width: 425px)': { fontSize: '1rem' },
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          flexBasis: '50%',
          '@media screen and (max-width: 425px)': { fontSize: '1rem' },
        }}
      >
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
