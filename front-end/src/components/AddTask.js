import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/AddTask.css';

export default class AddTask extends Component {
  constructor(props) {
    super(props);
    const { fetchURL } = this.props;
    this.state = {
      fetchURL,
      description: '',
      date: '',
    }
    this.handleClick = this.handleClick.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  handleClick = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        description: this.state.description,
        deadLine: this.state.date,
      }),
    }
    fetch(this.state.fetchURL, requestOptions);
    this.props.setIsloading(true);
  };

  changeState(state, event) {
    this.setState({
      [state]: event.target.value,
    });
  } 

  render() {
    return (
      <form className="new-task">
        <input
          className="input-text"
          type="text"
          placeholder="Descrição"
          onChange= {(event) => this.changeState('description', event)}
          value = {this.state.description}
        />
        <input
          className="input-date"
          required
          type="date"
          placeholder="Prazo"
          onChange= {(event) => this.changeState('date', event)}
          value = {this.state.date}
        />
        <button
          className="input-btn"
          type="submit"
          onClick={ (event) => this.handleClick(event) }
        >
          Adicionar Tarefa
        </button>
      </form>
    );
  }
}

AddTask.propTypes = {
  setIsloading: PropTypes.func.isRequired,
  fetchURL: PropTypes.string.isRequired,
};
