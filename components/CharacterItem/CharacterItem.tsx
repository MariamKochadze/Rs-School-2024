/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import { FavoriteButton } from '@components/FavoriteButton/FavoriteButton';
import { useHandleDetails } from '@hooks/useHandleDetails';
import { CharacterWithFavorite } from '@models/index';
import classnames from 'classnames';
import styles from './CharacterItem.module.scss';

interface CharacterItemProps {
  character: CharacterWithFavorite;
  isDetailsOpen: boolean;
}

export const CharacterItem = ({ character, isDetailsOpen }: CharacterItemProps) => {
  const imageUrl = character.image;
  const { openDetails } = useHandleDetails();

  return (
    <li
      className={classnames(styles.characterItem, { [styles.small]: isDetailsOpen })}
      role="button"
      data-testid="item"
      tabIndex={0}
      onClick={e => openDetails(e, character.id)}
      onKeyUp={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          openDetails(e, character.id);
        }
      }}
    >
      <div className={styles.characterImgContainer}>
        <img className={styles.characterImg} src={imageUrl} alt="Character" />
      </div>
      <h3>{character.name}</h3>
      <div className={styles.characterFeatureBlock}>
        <p className={styles.featureTitle}>Gender</p>
        <p className={styles.featureValue}>{character.gender}</p>
      </div>
      <div className={styles.characterFeatureBlock}>
        <p className={styles.featureTitle}>Status</p>
        <p className={styles.featureValue}>{character.status}</p>
      </div>
      <FavoriteButton favorite={character} />
    </li>
  );
};
