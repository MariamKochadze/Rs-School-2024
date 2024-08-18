import { useSelector } from 'react-redux';
import { selectReactHookForm, selectUncontrolledForm } from 'src/store/selectors';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  const uncontrolledForm = useSelector(selectUncontrolledForm);
  const reactHookForm = useSelector(selectReactHookForm);

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.heading}>Uncontrolled Form</h2>
        <div className={styles.info}>
          <div className={styles.item}>
            <span className={styles.label}>Name:</span>
            <span className={styles.value}>{uncontrolledForm.name}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Age:</span>
            <span className={styles.value}>{uncontrolledForm.age}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Email:</span>
            <span className={styles.value}>{uncontrolledForm.email}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Gender:</span>
            <span className={styles.value}>{uncontrolledForm.gender}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Country:</span>
            <span className={styles.value}>{uncontrolledForm.country}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Terms Accepted:</span>
            <span className={styles.value}>{uncontrolledForm.termsAccepted ? 'Yes' : 'No'}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Uploaded Image:</span>
            {uncontrolledForm.file && <img src={uncontrolledForm.file} alt="Uploaded" className={styles.image} />}
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <h2 className={styles.heading}>React Hook Form</h2>
        <div className={styles.info}>
          <div className={styles.item}>
            <span className={styles.label}>Name:</span>
            <span className={styles.value}>{reactHookForm.name}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Age:</span>
            <span className={styles.value}>{reactHookForm.age}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Email:</span>
            <span className={styles.value}>{reactHookForm.email}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Gender:</span>
            <span className={styles.value}>{reactHookForm.gender}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Country:</span>
            <span className={styles.value}>{reactHookForm.country}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Terms Accepted:</span>
            <span className={styles.value}>{reactHookForm.termsAccepted ? 'Yes' : 'No'}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Uploaded Image:</span>
            {reactHookForm.file && <img src={reactHookForm.file} alt="Uploaded" className={styles.image} />}
          </div>
        </div>
      </div>
    </>
  );
};
