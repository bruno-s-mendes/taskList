import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/TaskList.css';

class Task extends Component {
  constructor(props) {
    super(props);
    const { description, creation, deadline, status, id, fetchURL, statusList } = this.props;
    this.state = {
      description,
      creation,
      deadline,
      status,
      id,
      fetchURL,
      statusList,
    }
    this.updateTask = this.updateTask.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  changeState(state, event) {
    this.setState({
      [state]: event.target.value,
    });
  }

  updateTask = () => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        description: this.state.description,
        deadLine: this.state.deadline,
        status: this.state.status,
      }),
    }
    fetch(`${this.state.fetchURL}${this.state.id}`, requestOptions);
    this.props.setIsloading(true);
  };

  removeTask = () => {
    const requestOptions = {
      method: 'DELETE',
    }
    fetch(`${this.state.fetchURL}${this.state.id}`, requestOptions);
    this.props.setIsloading(true);
  };

  render() {
    const { description, creation, deadline, status, statusList } = this.state;
    return (
      <tr>
      <td className="description-cell"><input
        className="cell-input"
        type="text"
        onChange= {(event) => this.changeState('description', event)}
        value = {description}
        onBlurCapture={() => this.updateTask()}
      /></td>
      <td className="table-cell"><input
          className="cell-input"
          readOnly
          type="text"
          value = {creation}
        /></td>
      <td className="table-cell"><input
          className="cell-input"
          type="date"
          onChange= {(event) => this.changeState('deadline', event)}
          value = {deadline}
          onBlurCapture={() => this.updateTask()}
        /></td>
      <td className="table-cell"><select 
            className="status-input"
            name="status"
            value={status}
            onChange={(event) => this.changeState('status', event)}
            onBlurCapture={() => this.updateTask()}
            >
          { statusList.map((status, index) => <option key ={index} value={ status }>{ status }</option>) }
          </select><button
          className="delete-btn"
          onClick={() => this.removeTask()}
          >x</button></td>
    </tr>
    );
  }
}

Task.propTypes = {
  setIsloading: PropTypes.func.isRequired,
  fetchURL: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  creation: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  statusList: PropTypes.array.isRequired,
};

export default Task;
