import React from 'react';
import styled from 'styled-components';
import ModeSwitcher from './ModeSwitcher';

export default function Header() {
  return (
    <Container>
      <h1>Hello Zebra!</h1>
      <ModeSwitcher />
    </Container>
  );
}

const Container = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: auto 145px;
`;
