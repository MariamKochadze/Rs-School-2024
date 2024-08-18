import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
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
      value && value instanceof File ? ['image/jpeg', 'image/png'].includes(value.type) : true
    )
    .test('fileSize', 'File too large', value => (value && value instanceof File ? value.size <= 5000000 : true)),
});
