import React, { useState, useEffect, useRef } from 'react';
import IconButton from './Buttons/IconButton';
import PropTypes from 'prop-types';

DropDownMenu.propTypes = {
  onSchedule: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default function DropDownMenu({ onSchedule, onEdit, onDelete }) {
  const [isShown, setShown] = useState(false);
  const menuToggle = useRef();

  function closeMenu(event) {
    console.log(event.target, menuToggle);
    if (menuToggle.current.contains(event.target)) return;
    setShown(false);
  }

  useEffect(() => {
    document.addEventListener('click', closeMenu, true);
    return () => document.removeEventListener('click', closeMenu);
  }, []);

  return (
    <div>
      <div ref={menuToggle}>
        <IconButton
          isHidden={true}
          type="button"
          title="Dropdown menu"
          name="dropdownMenu"
          icon="more_vert"
          onClick={isShown ? () => setShown(false) : () => setShown(true)}
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
            onClick={() => console.log('Hi')}
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
