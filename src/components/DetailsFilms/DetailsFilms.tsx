import { Film } from '@models/index';
import styles from './DetailsFilms.module.scss';

interface DetailsFilmsProps {
  filteredFilms: Film[];
}

export const DetailsFilms = ({ filteredFilms }: DetailsFilmsProps) => (
  <div>
    <h4 className={styles.blockTitle}>Episodes</h4>
    <ul className={styles.films}>
      {filteredFilms.map(film => (
        <li key={film.id} className={styles.filmItem}>
          <h5 className={styles.featureTitle}>Name: {film.name}</h5>
          <p>Episode: {film.episode}</p>
          {/* <div className={styles.filmImgContainer}>
            <img className={styles.filmImg} src={urlImgTemplates.film(film.episode_id)} alt="Character" />
          </div> */}
        </li>
      ))}
    </ul>
  </div>
);
