import SnackBar from '..';
import { RequestStatusAnswer, RequestStatusColor } from '../../../types';
import { StatusUpdater } from '../types';

const renderSnackBar = (
  statusType: string,
  setStatus: StatusUpdater
): JSX.Element | null => {
  if (statusType === '') {
    return null;
  }

  const title =
    statusType === 'isError'
      ? RequestStatusAnswer.exist
      : RequestStatusAnswer.success;

  const color =
    statusType === 'isError'
      ? RequestStatusColor.exist
      : RequestStatusColor.success;

  return (
    <SnackBar
      title={title}
      color={color}
      setStatus={setStatus}
      isOk={statusType === 'isOk'}
    />
  );
};
export default renderSnackBar;
