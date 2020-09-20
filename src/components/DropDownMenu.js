import React from 'react';
import styled from 'styled-components';
import IconButton from './Buttons/IconButton';
import { useMenuToggle } from '../hooks/useMenuToggle';

import PropTypes from 'prop-types';

DropDownMenu.propTypes = {
  children: PropTypes.array.isRequired,
};

export default function DropDownMenu({ children }) {
  const [isShown, menuToggle, showMenu, closeMenu] = useMenuToggle();

  return (
    <Container>
      <div ref={menuToggle}>
        <IconButton
          isHidden={true}
          type="button"
          title="Dropdown menu"
          name="dropdownMenu"
          icon="more_vert"
          onClick={() => (isShown ? closeMenu() : showMenu())}
        />
      </div>
      {isShown && <Items>{children}</Items>}
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  & button:focus {
    background-color: isShown && var(--surface);
  }
`;

const Items = styled.div`
  background-color: var(--on-surface);
  box-shadow: 0 1px 3px var(--light-shadow), 0 1px 2px var(--dark-shadow);
  position: absolute;
  top: 0%;
  right: 0;
  z-index: 1000;
`;
