import styles from './Button.module.scss';

type ButtonType = 'submit' | 'reset' | 'button';

interface Props {
  type?: ButtonType;
  text: string;
  disabled?: boolean;
}

export const Button = (props: Props) => (
  <button className={styles.button} type={props.type} disabled={props.disabled}>
    {props.text}
  </button>
);
