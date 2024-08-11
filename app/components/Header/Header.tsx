import logo from '@assets/images/logo.png';
import { Search } from '@components/Search/Search';
import { ThemeSwitcher } from '@components/ThemeSwitcher/ThemeSwitcher';
import { Link } from '@remix-run/react';
import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <Link to="/" className={styles.logoLink}>
        <img className={styles.logo} src={logo} alt="Logo" />
      </Link>
      <Search />
      <ThemeSwitcher />
    </div>
  </header>
);
