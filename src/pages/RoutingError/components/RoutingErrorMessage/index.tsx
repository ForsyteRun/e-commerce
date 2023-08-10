import { isRouteErrorResponse } from 'react-router-dom';
import styles from './RoutingErrorMessage.module.scss';

function RoutingErrorMessage(error: unknown): JSX.Element {
  let message = 'Something went wrong...';

  if (isRouteErrorResponse(error)) {
    const { status, statusText } = error;
    const is404 = status === 404;

    message = `
      ${status && `${status} - `}
      ${is404 && 'PAGE '}
      ${statusText && statusText}
    `;
  }

  return <h2 className={styles.errorMessage}>{message.toUpperCase()}</h2>;
}

export default RoutingErrorMessage;
