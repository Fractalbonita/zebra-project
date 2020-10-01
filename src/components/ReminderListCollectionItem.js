import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

ReminderListCollectionItem.propTypes = {
  title: PropTypes.string,
  reminders: PropTypes.array,
  listId: PropTypes.string,
};

export default function ReminderListCollectionItem({
  title,
  reminders,
  listId,
}) {
  return (
    <>
      <ListLink to={`/lists/${listId}`}>
        <h3>{title}</h3>
        <h3>{reminders.length}</h3>
      </ListLink>
    </>
  );
}

const ListLink = styled(Link)`
  display: flex;
  flex-direction: row;
  column-gap: 50px;
  justify-content: space-between;
  text-decoration: none;

  h3 {
    word-break: normal;
  }
`;
