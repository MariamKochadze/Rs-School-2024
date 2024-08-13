import { AppRoutes } from '@router/routes';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
  <div>
    <h1>Page was not found!</h1>
    <Link to={AppRoutes.HOME_PAGE}>Back to Home</Link>
  </div>
);
