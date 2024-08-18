import { Header } from '@components/Header/Header.component';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useGetCountriesQuery } from 'src/store/api/countryApi';
import { setCountries } from 'src/store/countriesSlice';
import { useAppDispatch } from 'src/store/store';

export const MainLayout = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isFetching } = useGetCountriesQuery();

  useEffect(() => {
    dispatch(setCountries(data));
  }, [data]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
