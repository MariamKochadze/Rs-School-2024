import { Control, Controller, FieldValues } from 'react-hook-form';
import styles from './FormInput.module.scss';

interface Props {
  type: string;
  name: string;
  label?: string;
  options?: { value: string; label: string }[];
  control: Control<FieldValues> | undefined;
}

export const FormInput = ({ type, name, label, options, control }: Props) => (
  <div className={styles.formGroup}>
    {label && type !== 'checkbox' && type !== 'file' && <label htmlFor={name}>{label}</label>}
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              field.onChange(reader.result as string);
            };
            reader.readAsDataURL(file);
          } else {
            field.onChange(null); // Handle no file selected
          }
        };

        if (type === 'radio') {
          return (
            <div className={styles.radioGroup}>
              {options?.map(option => (
                <div key={option.value} className={styles.radioOption}>
                  <input
                    type="radio"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                  />
                  <label htmlFor={option.value}>{option.label}</label>
                </div>
              ))}
              {fieldState.error && <p className={styles.error}>{fieldState.error.message}</p>}
            </div>
          );
        }
        if (type === 'checkbox') {
          return (
            <div className={styles.checkboxGroup}>
              <input type="checkbox" id={name} {...field} checked={field.value} />
              <label htmlFor={name}>{label}</label>
              {fieldState.error && <p className={styles.error}>{fieldState.error.message}</p>}
            </div>
          );
        }
        if (type === 'file') {
          return (
            <div className={styles.fileGroup}>
              <input type="file" id={name} onChange={handleFileChange} />
              {fieldState.error && <p className={styles.error}>{fieldState.error.message}</p>}
            </div>
          );
        }
        return (
          <div className={styles.inputGroup}>
            <input type={type} id={name} {...field} />
            {fieldState.error && <p className={styles.error}>{fieldState.error.message}</p>}
          </div>
        );
      }}
    />
  </div>
);
