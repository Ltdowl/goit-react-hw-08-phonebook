import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function AuthNav() {
  return (
    <Nav>
      <LinkContainer to="/register"><Nav.Link>Sign Up</Nav.Link></LinkContainer>
      <LinkContainer to="/login"><Nav.Link>Log In</Nav.Link></LinkContainer>
    </Nav>
  );
}