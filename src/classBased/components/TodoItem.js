import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

const completedStyle = {
  fontStyle: 'italic',
  color: '#595959',
  opacity: 0.4,
  textDecoration: 'line-through',
};

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editing: false };
  }

  // eslint-disable-next-line react/sort-comp
  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  };

  componentWillUnmount() {
    // console.log('Cleaning up...');
  }

  render() {
    const { editing } = this.state;
    const {
      todo, handleChangeProps, deleteTodoProps, setUpdate,
    } = this.props;
    const viewMode = {};
    const editMode = {};
    const { title, id, completed } = todo;
    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => handleChangeProps(id)}
          />
          <button type="button" onClick={() => deleteTodoProps(todo.id)}>
            Delete
          </button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={(e) => {
            setUpdate(e.target.value, id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}

export default TodoItem;
TodoItem.propTypes = { setUpdate: PropTypes.func.isRequired };
TodoItem.propTypes = { handleChangeProps: PropTypes.func.isRequired };
TodoItem.propTypes = { deleteTodoProps: PropTypes.func.isRequired };
TodoItem.propTypes = { todo: PropTypes.number.isRequired };
TodoItem.propTypes = { completed: PropTypes.bool.isRequired };
TodoItem.propTypes = { id: PropTypes.string.isRequired };
TodoItem.propTypes = { title: PropTypes.string };
TodoItem.defaultProps = { title: '' };
