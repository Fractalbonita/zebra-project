import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

ReminderListTitle.propTypes = {
  listTitle: PropTypes.string,
};

export default function ReminderListTitle({ listTitle }) {
  return (
    <div>
      <Title>{listTitle}</Title>
    </div>
  );
}

const Title = styled.h2`
  font-size: 18px;
`;
