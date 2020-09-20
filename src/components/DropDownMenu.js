import React from 'react';
import styled from 'styled-components';
import IconButton from './Buttons/IconButton';
import { useMenuToggle } from '../hooks/useMenuToggle';

import PropTypes from 'prop-types';

DropDownMenu.propTypes = {
  onSchedule: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
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
`;

const Items = styled.div`
  position: absolute;
  top: 0%;
  right: 0;
  z-index: 1000;
`;
