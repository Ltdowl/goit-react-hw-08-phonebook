import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from '../UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from '../../redux/auth';

import { Navbar, Container } from 'react-bootstrap';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Navbar bg="primary" variant="dark" fixed="top">
      <Container>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </Navbar>
  );
}
