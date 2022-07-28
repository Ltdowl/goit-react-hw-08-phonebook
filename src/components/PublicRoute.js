import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export default function PublicRoute({
  redirectTo = '/contacts',
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
}