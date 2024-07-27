import { CharacterWithFavorite, CharacterWithId } from '@models/index';

export const extractIdFromUrl = (url: string): string => {
  const parts = url.split('/');
  return parts[parts.length - 2];
};

export const getPaginationRange = (currentPage: number, totalPages: number) => {
  const rangeSize = 5;
  const start = Math.floor((currentPage - 1) / rangeSize) * rangeSize + 1;
  const end = Math.min(start + rangeSize - 1, totalPages);

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

export function isNotNullable<T>(value: T, errorMessage?: string): NonNullable<T> {
  if (value === undefined || value === null) {
    throw new Error(errorMessage || 'Not expected value');
  }
  return value;
}

export function markFavorites(
  characters: CharacterWithId[],
  favorites: CharacterWithFavorite[]
): CharacterWithFavorite[] {
  const favoriteIds = new Set(favorites.map(fav => fav.id));

  return characters.map(character => ({
    ...character,
    isFavorite: favoriteIds.has(character.id),
  }));
}

function formatCSVValue(value: string[] | string): string {
  let formattedValue: string;

  if (Array.isArray(value)) {
    formattedValue = value.join(', ');
  } else {
    formattedValue = value;
  }

  if (/[",]/.test(formattedValue)) {
    formattedValue = `"${formattedValue}"`;
  }

  return formattedValue;
}

export function generateCSVContent(characters: CharacterWithFavorite[]): string {
  const headers = ['Name', 'Gender', 'Status', 'Species', 'Created', 'Edited', 'URL'];

  const rows = characters.map(character => [
    character.name || '',
    character.status || '',
    character.gender || '',
    formatCSVValue(character.species),
    character.created || '',
    character.url || '',
  ]);

  const csvContent = [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
  return csvContent;
}
