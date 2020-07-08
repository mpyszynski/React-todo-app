import React from 'react';
import ListItem from './ListItem';
import './style/list.css';
import PropTypes from 'prop-types';

export default function List(props) {
  const listRender = props.todoList.map(listItem => (
    <ListItem
      key={listItem.id}
      todo={listItem}
      toggleCompletion={props.toggleCompletion}
      deleteItem={props.deleteItem}
    />
  ));
  return <ul className='todo__main'>{listRender}</ul>;
}

List.propTypes = {
  toggleCompletion: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  todoList: PropTypes.array.isRequired,
};
