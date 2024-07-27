import { FavoriteButton } from '@components/FavoriteButton/FavoriteButton';
import { CharacterWithFavorite } from '@models/index';
import styles from './FavoritesItem.module.scss';

interface FavoritesListProps {
  favorite: CharacterWithFavorite;
}

export const FavoritesItem = ({ favorite }: FavoritesListProps) => {
  const imageUrl = favorite.image;

  return (
    <li className={styles.favoritesItem}>
      <h4 className={styles.favoritesName}>{favorite.name}</h4>
      <div className={styles.favoritesImgContainer}>
        <img className={styles.favoritesImg} src={imageUrl} alt="Character" />
      </div>
      <FavoriteButton favorite={{ ...favorite, isFavorite: true }} />
    </li>
  );
};
