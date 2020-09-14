import React from 'react';
import propTypes from 'prop-types';

Icon.propTypes = { icon: propTypes.string };

export default function Icon({ icon, ...props }) {
  return (
    <span className="material-icons" {...props}>
      {icon}
    </span>
  );
}
