import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import { authOperations } from '../redux/auth';
import AppBar from './AppBar';
import { Layout } from './Layout/Layout';
import { ToastContainer } from 'react-toastify';
import NotFound from '../views/NotFound';

const HomeView = lazy(() => import('../views/HomeView'));
const ContactsView = lazy(() => import('../views/ContactsView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <ToastContainer />
      <AppBar />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />

          <Route path="/register" element={<PublicRoute />}>
            <Route path="/register" element={<RegisterView />} />
          </Route>

          <Route path="/login" element={<PublicRoute />}>
            <Route path="/login" element={<LoginView />} />
          </Route>

          <Route path="/contacts" element={<PrivateRoute />}>
            <Route path="/contacts" element={<ContactsView />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}