import { ErrorButton } from '@components/ErrorButton/ErrorButton';
import { Search } from '@components/Search/Search';
import { ThemeSwitcher } from '@components/ThemeSwitcher/ThemeSwitcher';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <Link className={styles.logoLink} to="/">
        <h3 className={styles.logo}>RICK & MORTY</h3>
      </Link>
      <ErrorButton />
      <Search />
      <ThemeSwitcher />
    </div>
  </header>
);
