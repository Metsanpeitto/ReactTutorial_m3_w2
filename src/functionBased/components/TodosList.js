import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const {
    todos, handleChangeProps, deleteTodoProps, setUpdate,
  } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};
export default TodosList;
TodosList.propTypes = { todos: PropTypes.string.isRequired };
TodosList.propTypes = { handleChangeProps: PropTypes.func.isRequired };
TodosList.propTypes = { deleteTodoProps: PropTypes.func.isRequired };
TodosList.propTypes = { setUpdate: PropTypes.func.isRequired };
