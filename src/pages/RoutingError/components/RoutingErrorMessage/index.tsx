import { isRouteErrorResponse } from 'react-router-dom';
import styles from './RoutingErrorMessage.module.scss';

function RoutingErrorMessage(error: unknown): JSX.Element {
  if (isRouteErrorResponse(error)) {
    const { status, statusText } = error;
    return (
      <h2 className={styles.errorMessage}>{`${status && `${status} - `}
      ${statusText && statusText.toUpperCase()}`}</h2>
    );
  }
  return <h2>Something went wrong...</h2>;
}

export default RoutingErrorMessage;
