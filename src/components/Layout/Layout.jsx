import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from "../Container/Container";

export const Layout = () => {
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};