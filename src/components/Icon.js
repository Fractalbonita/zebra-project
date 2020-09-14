import React from 'react';
import PropTypes from 'prop-types';

Icon.propTypes = { icon: PropTypes.string };

export default function Icon({ icon, ...props }) {
  return (
    <span className="material-icons" {...props}>
      {icon}
    </span>
  );
}
