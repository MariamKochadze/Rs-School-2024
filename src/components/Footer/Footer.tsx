import styles from './Footer.module.scss';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContainer}>
      <a className={styles.footerGithubLink} href="https://github.com/MariamKochadze" aria-label="link to github">
        <span className={styles.footerGithub} />
      </a>
    </div>
  </footer>
);
