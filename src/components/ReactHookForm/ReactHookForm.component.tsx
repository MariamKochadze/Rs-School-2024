import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Country } from 'src/store/countriesSlice';
import { setReactHookForm } from 'src/store/reactHookFormSlice';
import { selectCountries } from 'src/store/selectors';
import { useAppDispatch } from 'src/store/store';
import * as Yup from 'yup';
import { CountrySelect } from './CountrySelect';
import styles from './Form.module.scss';
import { FormInput } from './FormInput';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Z][a-zA-Z]*(?:\s[A-Z][a-zA-Z]*)*$/, 'Name must start with an uppercase letter for each part')
    .required('Name is required'),
  age: Yup.number().positive('Age must be a positive number').required('Age is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
  gender: Yup.string().required('Gender is required'),
  termsAccepted: Yup.bool().oneOf([true], 'You must accept the terms and conditions'),
  country: Yup.string().required('Country is required'),
  file: Yup.mixed()
    .test('fileType', 'Unsupported File Format', value =>
      value && typeof value === 'string' ? value.startsWith('data:image/') : true
    )
    .test('fileSize', 'File too large', value => (value && typeof value === 'string' ? value.length <= 5000000 : true)),
});

export const ReactHookForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const countries: Country[] = useSelector(selectCountries);
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: unknown) => {
    dispatch(setReactHookForm(data));
    navigate('/', { state: { newData: true } });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <FormInput type="text" name="name" label="Name" control={control} />
      <FormInput type="number" name="age" label="Age" control={control} />
      <FormInput type="email" name="email" label="Email" control={control} />
      <FormInput type="password" name="password" label="Password" control={control} />
      <FormInput type="password" name="confirmPassword" label="Confirm Password" control={control} />
      <FormInput
        type="radio"
        name="gender"
        label="Gender"
        options={[
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
        ]}
        control={control}
      />
      <FormInput type="file" name="file" label="Upload Image" control={control} />
      <CountrySelect name="country" countries={countries} control={control} />
      <FormInput type="checkbox" name="termsAccepted" label="I accept the terms and conditions" control={control} />
      <button type="submit">Submit</button>
    </form>
  );
};
