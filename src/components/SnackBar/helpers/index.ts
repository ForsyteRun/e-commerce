import { AlertColor } from '@mui/material';
import { RequestStatusAnswer, RequestStatusCode } from '../../../types';
import { IGetErrorSnackBar } from '../types';

const getErrorSnackBar = (statusType: number): IGetErrorSnackBar => {
  const statusMappings: Record<
    number,
    { severity: AlertColor; access: string }
  > = {
    [RequestStatusCode.Created]: {
      severity: RequestStatusAnswer.success,
      access: 'Created!',
    },
    [RequestStatusCode.OK]: {
      severity: RequestStatusAnswer.success,
      access: 'Created!',
    },
    [RequestStatusCode.InternalServerError]: {
      severity: 'error',
      access: RequestStatusAnswer.serverError,
    },
    [RequestStatusCode.BadRequest]: {
      severity: 'error',
      access: RequestStatusAnswer.exist,
    },
  };

  return statusMappings[statusType];
};
export default getErrorSnackBar;
