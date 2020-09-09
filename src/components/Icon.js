import React from 'react';

export default ({ icon, ...props }) => (
  <span className="material-icons" {...props}>
    {icon}
  </span>
);
