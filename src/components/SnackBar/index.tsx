// // import { AlertProps, Snackbar, Stack } from '@mui/material';
// // import MuiAlert from '@mui/material/Alert';
// // import * as React from 'react';

// import { SnackBarProps } from './types';

// const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
//   function Alert(props, ref) {
//     // eslint-disable-next-line react/jsx-props-no-spreading
//     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
//   }
// );

// const AlertSnackBar: React.FC<SnackBarProps> = ({ open, error, setOpen }) => {
//   // const navigate = useNavigate();

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Stack spacing={2} sx={{ width: '100%' }}>
//       <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
//         {error ? (
//           <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
//             User exist!
//           </Alert>
//         ) : (
//           <Alert
//             onClose={handleClose}
//             severity="success"
//             sx={{ width: '100%' }}
//           >
//             Success!
//           </Alert>
//         )}
//       </Snackbar>
//       {/* <Alert severity="error">This is an error message!</Alert>
//       <Alert severity="warning">This is a warning message!</Alert>
//       <Alert severity="info">This is an information message!</Alert>
//       <Alert severity="success">This is a success message!</Alert> */}
//     </Stack>
//   );
// };

// export default AlertSnackBar;
