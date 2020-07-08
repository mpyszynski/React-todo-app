import React from 'react';
import PropTypes from 'prop-types';

export default function ListItem(props) {
  const { title, description, isCompleted, id } = props.todo;
  const liClass = isCompleted
    ? 'todo__item todo__item--completed'
    : 'todo__item';
  return (
    <li onClick={() => props.toggleCompletion(id)} className={liClass}>
      <section className='todo__item--section'>
        <h1>{title}</h1>
        <p>{description}</p>
      </section>
      {isCompleted && (
        <div className='todo__item--div'>
          <button
            onClick={e => props.deleteItem(e, id)}
            className='todo__item--button'
          >
            Remove
          </button>
        </div>
      )}
    </li>
  );
}

ListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteItem: PropTypes.func.isRequired,
  toggleCompletion: PropTypes.func.isRequired
};
