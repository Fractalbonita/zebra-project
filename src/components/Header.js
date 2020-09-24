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
  background-color: var(--surface);
  color: var(--text);
  display: flex;
  flex-direction: center;
  justify-content: space-between;
  align-items: center;
`;
