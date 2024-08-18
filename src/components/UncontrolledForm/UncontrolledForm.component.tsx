import { Button } from '@components/Button/Button.component';
import { CountrySelect } from '@components/CountrySelect/CountrySelect.component';
import { Form } from '@components/Form/Form.component';
import { Input } from '@components/Input/Input.component';
import { FormEvent, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Country } from 'src/store/countriesSlice';
import { selectCountries } from 'src/store/selectors';
import { useAppDispatch } from 'src/store/store';
import { setUncontrolledForm } from 'src/store/uncontrolledFormSlice';
import { validationSchema } from 'src/utils/validate';
import * as Yup from 'yup';
import styles from './Uncontrolled.module.scss';

export const UncontrolledForm = () => {
  const dispatch = useAppDispatch();
  const countries: Country[] = useSelector(selectCountries);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [gender, setGender] = useState<string>('');
  const navigate = useNavigate();

  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputAgeRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const inputConfirmPasswordRef = useRef<HTMLInputElement>(null);
  const inputUploadImageRef = useRef<HTMLInputElement>(null);
  const inputSelectCountryRef = useRef<HTMLSelectElement>(null);
  const inputTermsAndConditionsRef = useRef<HTMLInputElement>(null);

  const validateForm = async () => {
    const formData = {
      name: inputNameRef.current?.value || '',
      age: inputAgeRef.current?.value || '',
      email: inputEmailRef.current?.value || '',
      password: inputPasswordRef.current?.value || '',
      confirmPassword: inputConfirmPasswordRef.current?.value || '',
      gender,
      termsAccepted: inputTermsAndConditionsRef.current?.checked || false,
      country: inputSelectCountryRef.current?.value || '',
      file: inputUploadImageRef.current?.files ? inputUploadImageRef.current.files[0] : null,
    };

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      return true;
    } catch (validationErrors) {
      if (validationErrors instanceof Yup.ValidationError) {
        const newErrors: { [key: string]: string } = {};
        (validationErrors as Yup.ValidationError).inner.forEach((error: Yup.ValidationError) => {
          if (error.path) {
            newErrors[error.path] = error.message;
          }
        });
        setErrors(newErrors);
      } else {
        console.error('Unexpected error:', validationErrors);
      }
      return false;
    }
  };

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const isValid = await validateForm();

    if (isValid) {
      const file = inputUploadImageRef.current?.files ? inputUploadImageRef.current.files[0] : null;

      let fileBase64 = '';
      if (file) {
        fileBase64 = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      }

      dispatch(
        setUncontrolledForm({
          name: inputNameRef.current?.value,
          age: inputAgeRef.current?.value,
          email: inputEmailRef.current?.value,
          password: inputPasswordRef.current?.value,
          gender,
          termsAccepted: inputTermsAndConditionsRef.current?.checked,
          country: inputSelectCountryRef.current?.value,
          file: fileBase64,
        })
      );

      navigate('/', { state: { newData: true } });
    }
  }

  return (
    <div>
      <h2 className={styles.heading}>Uncontrolled Form</h2>
      <Form handleSubmit={handleSubmit}>
        <Input type="text" placeHolder="name" inputRef={inputNameRef} error={errors.name} />
        <Input type="number" placeHolder="age" inputRef={inputAgeRef} error={errors.age} />
        <Input type="email" placeHolder="email" inputRef={inputEmailRef} error={errors.email} />
        <Input type="password" placeHolder="password" inputRef={inputPasswordRef} error={errors.password} />
        <Input
          type="password"
          placeHolder="confirm password"
          inputRef={inputConfirmPasswordRef}
          error={errors.confirmPassword}
        />
        <div className={styles.radioButtons}>
          <Input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={() => setGender('male')}
            labelFor="male"
            labelText="Male"
          />
          <Input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={() => setGender('female')}
            labelFor="female"
            labelText="Female"
          />
        </div>
        <Input type="file" labelText="Upload image" inputRef={inputUploadImageRef} error={errors.file} />
        <CountrySelect countries={countries} inputRef={inputSelectCountryRef} error={errors.country} />
        <Input
          type="checkbox"
          labelText="Terms and Conditions"
          inputRef={inputTermsAndConditionsRef}
          error={errors.termsAccepted}
        />
        <Button type="submit" text="Submit" />
      </Form>
    </div>
  );
};
