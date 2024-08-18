import { RefObject } from 'react';
import styles from './Input.module.scss';

interface Props {
  type: string;
  placeHolder?: string;
  labelText?: string;
  labelFor?: string;
  id?: string;
  value?: string;
  name?: string;
  checked?: boolean;
  inputRef?: RefObject<HTMLInputElement>;
  error?: string;
  onChange?: () => void;
}

export const Input = (props: Props) => {
  const { type, placeHolder, labelText, labelFor, id, value, name, checked, inputRef, error, onChange } = props;

  return (
    <div className={`${styles.inputField} ${type === 'checkbox' || type === 'radio' ? styles.checkboxField : ''}`}>
      {labelText && <label htmlFor={labelFor}>{labelText}</label>}
      <input
        type={type}
        placeholder={placeHolder}
        id={id}
        name={name}
        value={value}
        checked={checked}
        ref={inputRef}
        onChange={onChange}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
