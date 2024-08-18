import { createSlice } from '@reduxjs/toolkit';

type UncontrolledForm = {
  name: string;
  age: string;
  email: string;
  password: string;
  gender: string;
  termsAccepted: boolean;
  country: string;
  file: string;
};

type UncontrolledFormState = {
  uncontrolledForm: UncontrolledForm;
};

const initialState: UncontrolledFormState = {
  uncontrolledForm: {
    name: '',
    age: '',
    email: '',
    password: '',
    gender: '',
    termsAccepted: true,
    country: '',
    file: '',
  },
};

const uncontrolledFormSlice = createSlice({
  name: 'uncontrolledForm',
  initialState,
  reducers: {
    setUncontrolledForm(state, action) {
      state.uncontrolledForm = action.payload;
    },
  },
});

export const uncontrolledFormReducer = uncontrolledFormSlice.reducer;
export const { setUncontrolledForm } = uncontrolledFormSlice.actions;
