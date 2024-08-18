import { FormEvent, ReactNode } from 'react';
import styles from './Form.module.scss';

interface Props {
  children: ReactNode;
  handleSubmit: (e: FormEvent) => void;
}

export const Form = (props: Props) => (
  <form className={styles.form} onSubmit={props.handleSubmit}>
    {props.children}
  </form>
);
