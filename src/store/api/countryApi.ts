import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Country } from '../countriesSlice';

const COUNTRY_BASE_URL = 'https://restcountries.com/v3.1';

export const countryApi = createApi({
  reducerPath: 'countryApi',
  baseQuery: fetchBaseQuery({ baseUrl: COUNTRY_BASE_URL }),
  endpoints: builder => ({
    getCountries: builder.query<Country[], void>({
      query: () => '/all?fields=name',
    }),
  }),
});

export const { useGetCountriesQuery } = countryApi;
