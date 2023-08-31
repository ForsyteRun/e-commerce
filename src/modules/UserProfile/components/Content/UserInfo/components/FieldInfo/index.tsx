import ModeIcon from '@mui/icons-material/Mode';
import { Button, InputAdornment, Stack, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Form, Formik } from 'formik';
import React, { Dispatch, SetStateAction } from 'react';
import getModifyTitle from 'modules/UserProfile/helpers/getModifyTitle';
import styles from './fieldInfo.module.scss';

interface IFieldInfo {
  value: string | undefined;
  title: string;
  setUserData: Dispatch<SetStateAction<Record<string, string | undefined>>>;
}
const FieldInfo: React.FC<IFieldInfo> = ({ value, title, setUserData }) => {
  const [open, setOpen] = React.useState(false);
  const [formValue, setFormValue] = React.useState('');

  const handleSubmit = (unit: Record<string, string>) => {
    const dataField = getModifyTitle(Object.keys(unit));

    setUserData({ [dataField]: formValue });
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
          <ModeIcon sx={{ cursor: 'pointer' }} onClick={() => setOpen(true)} />
        </>
      ) : (
        <Formik
          initialValues={{
            [title]: '',
          }}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {() => (
            <Form>
              <TextField
                fullWidth
                placeholder={`enter ${title}`}
                name={title}
                type={title}
                onChange={(e) => setFormValue(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button onClick={() => setOpen(false)}>cancel</Button>
                      <Button type="submit">submit</Button>
                    </InputAdornment>
                  ),
                }}
              />
            </Form>
          )}
        </Formik>
      )}
    </Stack>
  );
};

export default FieldInfo;
