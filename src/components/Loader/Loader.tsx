import styles from './Loader.module.scss';

interface LoaderProps {
  style?: React.CSSProperties;
}

export const Loader = ({ style }: LoaderProps) => (
  <div id="loader" className={styles.loaderContainer}>
    <div className={styles.loader} style={style} />
  </div>
);
