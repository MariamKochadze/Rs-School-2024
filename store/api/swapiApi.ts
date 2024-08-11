/* eslint-disable consistent-return */
import {
  Character,
  CharacterWithId,
  PaginatedCharacters,
  PaginatedCharactersWithId,
  PaginatedFilms
} from '@models/index';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { extractIdFromUrl } from '@utils/utils';
import { HYDRATE } from 'next-redux-wrapper';

const RM_BASE_URL = 'https://rickandmortyapi.com/api/';


const addIdToCharacter = (character: Character): CharacterWithId => {
  const id = extractIdFromUrl(character.url);

  return {
    ...character,
    id,
  };
};

const addIdToCharacters = (response: PaginatedCharacters): PaginatedCharactersWithId => ({
  ...response,
  results: response.results.map(addIdToCharacter),
});

export const swapiApi = createApi({
  reducerPath: 'swapiApi',
  baseQuery: fetchBaseQuery({ baseUrl: RM_BASE_URL }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: builder => ({
    searchPeople: builder.query<PaginatedCharactersWithId, { searchValue: string; page?: number }>({
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

export const {
  useSearchPeopleQuery,
  useLazyGetCharacterByIdQuery,
  useGetCharacterByIdQuery,
  useGetFilmsQuery,
  util: { getRunningQueriesThunk },
} = swapiApi;
