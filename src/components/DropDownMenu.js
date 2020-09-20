import React from 'react';
import IconButton from './Buttons/IconButton';
import { useMenuToggle } from '../hooks/useMenuToggle';

import PropTypes from 'prop-types';

DropDownMenu.propTypes = {
  onSchedule: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default function DropDownMenu({ onSchedule, onEdit, onDelete }) {
  const [isShown, menuToggle, showMenu, closeMenu] = useMenuToggle();

  return (
    <div>
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
      {isShown && (
        <div>
          <IconButton
            isHidden={true}
            type="button"
            title="Schedule"
            name="schedule"
            icon="schedule"
            onClick={onSchedule}
          />
          <IconButton
            isHidden={true}
            type="button"
            title="Edit"
            name="edit"
            icon="edit"
            onClick={onEdit}
          />
          <IconButton
            isHidden={true}
            type="button"
            title="Delete"
            name="delete"
            icon="delete"
            onClick={onDelete}
          />
        </div>
      )}
    </div>
  );
}
