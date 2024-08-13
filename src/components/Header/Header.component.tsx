import { AppRoutes } from '@router/routes';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <nav>
      <Link to={AppRoutes.HOME_PAGE}>Home</Link>
      <Link to={AppRoutes.REACT_HOOK_FORM_PAGE}>React Hook Form</Link>
      <Link to={AppRoutes.UNCONTROLLED_FORM_PAGE}>Uncontrolled Form</Link>
    </nav>
  </header>
);
