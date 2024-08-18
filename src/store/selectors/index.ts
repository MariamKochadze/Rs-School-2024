import { RootState } from '../store';

export const selectCountries = (state: RootState) => state.countries.countries;
export const selectUncontrolledForm = (state: RootState) => state.uncontrolledForm.uncontrolledForm;
export const selectReactHookForm = (state: RootState) => state.reactHookForm.reactHookForm;
