import { useGetCharacterByIdQuery, useGetFilmsQuery } from '@store/api/rmApi';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectFilms } from 'src/store/selectors';

export const useDetails = () => {
  const [characterId, setCharacterId] = useState<string | null>(null);
  const location = useLocation();

  const films = useSelector(selectFilms);

  const { data: character } = useGetCharacterByIdQuery(characterId || '', {
    skip: !characterId,
  });

  // const planetPath = useMemo(() => (character ? extractPlanetPath(character.homeworld) : ''), [character]);
  // const { data: planet } = useGetPlanetQuery(planetPath, { skip: !character });
  useGetFilmsQuery();

  const { filteredFilms } = useMemo(() => {
    if (character && films) {
      const preparedFilms = films.filter(film => character.episode.includes(film.url)); // change films to episode
      return { filteredFilms: preparedFilms };
    }
    return { filteredFilms: [] };
  }, [character, films]);

  useEffect(() => {
    const setSearchInput = () => {
      const params = new URLSearchParams(location.search);
      const id = params.get('details') || '';

      setCharacterId(id);
    };

    setSearchInput();
  }, [location.search]);

  return { character, filteredFilms };
};
