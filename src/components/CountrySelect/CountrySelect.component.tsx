import { RefObject } from 'react';
import { Country } from 'src/store/countriesSlice';
import styles from './CountrySelect.module.scss';

interface Props {
  countries: Country[];
  inputRef?: RefObject<HTMLSelectElement>;
  error?: string;
}

export const CountrySelect = (props: Props) => {
  const { countries, inputRef, error } = props;

  return (
    <div className={styles.selectField}>
      <select name="country" id="country" ref={inputRef}>
        {countries &&
          countries.map(country => (
            <option key={country.name.common} value={country.name.common}>
              {country.name.common}
            </option>
          ))}
      </select>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
