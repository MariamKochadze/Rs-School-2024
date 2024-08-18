import { Control, Controller, FieldValues } from 'react-hook-form';
import { Country } from 'src/store/countriesSlice';
import styles from './CountrySelect.module.scss';

interface Props {
  countries: Country[];
  name: string;
  control: Control<FieldValues> | undefined;
}

export const CountrySelect = ({ countries, name, control }: Props) => (
  <div className={styles.selectField}>
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <>
          <select {...field}>
            <option value="">Select a country</option>
            {countries &&
              countries.map(country => (
                <option key={country.name.common} value={country.name.common}>
                  {country.name.common}
                </option>
              ))}
          </select>
          {fieldState.error && <p className={styles.error}>{fieldState.error.message}</p>}
        </>
      )}
    />
  </div>
);
