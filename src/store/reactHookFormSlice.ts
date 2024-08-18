import { createSlice } from '@reduxjs/toolkit';

export type IReactHookForm = {
  name: string;
  age: string;
  email: string;
  password: string;
  gender: string;
  termsAccepted: boolean;
  country: string;
  file: string;
};

type ReactHookFormState = {
  reactHookForm: IReactHookForm;
};

const initialState: ReactHookFormState = {
  reactHookForm: {
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

const reactHookFormSlice = createSlice({
  name: 'reactHookForm',
  initialState,
  reducers: {
    setReactHookForm(state, action) {
      state.reactHookForm = action.payload;
    },
  },
});

export const reactHookFormReducer = reactHookFormSlice.reducer;
export const { setReactHookForm } = reactHookFormSlice.actions;
