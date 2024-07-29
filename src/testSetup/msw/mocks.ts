import { CharacterWithFavorite, CharacterWithId } from '@models/index';

export const mockedCharacter: CharacterWithId = {
  id: '2',
  name: 'Morty Smith',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/1', 'https://rickandmortyapi.com/api/episode/2'],
  url: 'https://rickandmortyapi.com/api/character/2',
  created: '2017-11-04T18:50:21.651Z',
};

export const mockedReadyCharacter: CharacterWithFavorite = {
  ...mockedCharacter,
  isFavorite: false,
};

export const mockedFavorites: CharacterWithFavorite[] = [mockedReadyCharacter];

export const mockedDetails = {
  id: 2,
  name: 'Morty Smith',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  location: {
    name: 'Earth',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/1', 'https://rickandmortyapi.com/api/episode/2'],
  url: 'https://rickandmortyapi.com/api/character/2',
  created: '2017-11-04T18:50:21.651Z',
};

export const characterNotFound = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

export const mockedCharacters = {
  count: 1,
  next: '',
  previous: '',
  results: [mockedCharacter],
};

export const mockedFilm = {
  id: 28,
  name: 'The Ricklantis Mixup',
  air_date: 'September 10, 2017',
  episode: 'S03E07',
  characters: ['https://rickandmortyapi.com/api/character/1', 'https://rickandmortyapi.com/api/character/2'],
  url: 'https://rickandmortyapi.com/api/episode/28',
  created: '2017-11-10T12:56:36.618Z',
};

export const mockedFilms = {
  count: 1,
  next: '',
  previous: '',
  results: [mockedFilm],
};
