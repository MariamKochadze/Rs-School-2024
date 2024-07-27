export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterWithId extends Character {
  id: string;
}

export interface CharacterWithFavorite extends CharacterWithId {
  isFavorite: boolean;
}

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface PaginatedCharacters extends PaginatedResponse<Character> {}
export interface PaginatedCharactersWithId extends PaginatedResponse<CharacterWithId> {}
export interface PaginatedCharactersWithFavorites extends PaginatedResponse<CharacterWithFavorite> {}

export interface Film {
  characters: string[];
  created: string;
  director: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  title: string;
  url: string;
  vehicles: string[];
  name: string;
  id: string;
  episode: string;
}

export interface PaginatedFilms extends PaginatedResponse<Film> {}
