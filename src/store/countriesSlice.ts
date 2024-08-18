import { createSlice } from '@reduxjs/toolkit';

export type Country = {
  name: {
    common: string;
  };
};

type CountriesState = {
  countries: Country[];
};

const initialState: CountriesState = {
  countries: [],
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries(state, action) {
      state.countries = action.payload;
    },
  },
});

export const countriesReducer = countriesSlice.reducer;
export const { setCountries } = countriesSlice.actions;
