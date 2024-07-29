import {
  Character,
  CharacterWithId,
  PaginatedCharacters,
  PaginatedCharactersWithId,
  PaginatedFilms,
} from '@models/index';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Rick&Morty API
const RM_BASE_URL = 'https://rickandmortyapi.com/api/';

const addIdToCharacter = (character: Character): CharacterWithId => ({
  ...character,
});

const addIdToCharacters = (response: PaginatedCharacters): PaginatedCharactersWithId => ({
  ...response,
  results: response.results,
});

export const rmApi = createApi({
  reducerPath: 'rmApi',
  baseQuery: fetchBaseQuery({ baseUrl: RM_BASE_URL }),
  endpoints: builder => ({
    searchCharacter: builder.query<PaginatedCharactersWithId, { searchValue: string; page?: number }>({
      query: ({ searchValue, page }) => `character/?name=${searchValue}&page=${page}`,
      transformResponse: addIdToCharacters,
    }),
    getCharacterById: builder.query<CharacterWithId, string>({
      query: id => `character/${id}`,
      transformResponse: addIdToCharacter,
    }),
    getFilms: builder.query<PaginatedFilms, void>({
      query: () => 'episode',
    }),
  }),
});

export const { useSearchCharacterQuery, useLazyGetCharacterByIdQuery, useGetCharacterByIdQuery, useGetFilmsQuery } =
  rmApi;
