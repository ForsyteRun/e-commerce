import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import { FormikValues, useFormikContext } from 'formik';
import { FC, ReactNode, useState } from 'react';

interface IPasswordField {
  name: string;
}

const PasswordField: FC<IPasswordField> = ({ name }) => {
  const formik = useFormikContext<FormikValues>();
  const { errors, touched, handleChange, handleBlur } = formik;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <TextField
        fullWidth
        id={name}
        placeholder={`Enter ${name}`}
        name={name}
        label={name}
        type={showPassword ? 'text' : 'password'}
        value={formik.values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        error={!!(errors[name] && touched[name])}
        InputProps={{
          endAdornment: (
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          ),
        }}
      />
      {errors[name] && touched[name] && (
        <div className="errorValid">{errors[name] as ReactNode}</div>
      )}
    </>
  );
};

export default PasswordField;
