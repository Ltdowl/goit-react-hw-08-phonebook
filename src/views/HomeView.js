import React from 'react';
import { Container, Stack } from 'react-bootstrap';

const HomeView = () => (
  <Container className="bg-image" fluid>
    <Stack
      gap={2}
      className="position-absolute top-50 start-50 translate-middle"
    >
      <h1 className="text-center">
        <b>Welcome to Phonebook!</b>
      </h1>
    </Stack>
  </Container>
);

export default HomeView;
