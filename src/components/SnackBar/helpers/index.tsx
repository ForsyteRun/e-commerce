import SnackBar from '..';
import { RequestStatusAnswer, RequestStatusColor } from '../../../types';

const renderSnackBar = (
  statusType: string,
  setStatus: React.Dispatch<
    React.SetStateAction<{
      isError: boolean;
      isOk: boolean;
    }>
  >
) => {
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
