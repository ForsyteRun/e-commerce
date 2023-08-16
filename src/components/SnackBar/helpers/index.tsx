import SnackBar from '..';
import {
  RequestStatusAnswer,
  RequestStatusCode,
  RequestStatusColor,
} from '../../../types';

const renderSnackBar = (statusType: number | null): JSX.Element | null => {
  if (statusType === null) {
    return null;
  }

  let title;
  let color;

  if (statusType === RequestStatusCode.Created) {
    title = RequestStatusAnswer.success;
    color = RequestStatusColor.success;
  } else {
    title = RequestStatusAnswer.exist;
    color = RequestStatusColor.exist;
  }
  return <SnackBar title={title} color={color} />;
};
export default renderSnackBar;
