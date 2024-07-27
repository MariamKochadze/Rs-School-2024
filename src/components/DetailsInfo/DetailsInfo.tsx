import { CharacterWithFavorite } from '@models/index';
import styles from './DetailsInfo.module.scss';

interface DetailsInfoProps {
  character: CharacterWithFavorite;
}

export const DetailsInfo = ({ character }: DetailsInfoProps) => (
  <div className={styles.detailsInfo}>
    <h4 className={styles.blockTitle}>Info</h4>
    <div className={styles.characterFeatureBlock}>
      <p className={styles.featureTitle}>Gender</p>
      <p className={styles.featureValue}>{character.gender}</p>
    </div>
    <div className={styles.characterFeatureBlock}>
      <p className={styles.featureTitle}>Status</p>
      <p className={styles.featureValue}>{character.status}</p>
    </div>
    <div className={styles.characterFeatureBlock}>
      <p className={styles.featureTitle}>Species</p>
      <p className={styles.featureValue}>{character.species}</p>
    </div>
  </div>
);
