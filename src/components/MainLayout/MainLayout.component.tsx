import { Header } from '@components/Header/Header.component';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);
