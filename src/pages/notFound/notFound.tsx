import { AppRoutes } from '@router/routes';
import { Link } from 'react-router-dom';
import styles from './notFound.module.scss';

export function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.notFoundText}>Page was not found!</h1>
      <Link className={styles.notFoundLink} to={AppRoutes.HOME_PAGE}>
        Back to Home
      </Link>
    </div>
  );
}
