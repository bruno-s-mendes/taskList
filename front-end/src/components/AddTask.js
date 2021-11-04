import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class AddTask extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  addItem = () => {
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Descrição"
        />
        <input
          type="date"
          placeholder="Prazo"
        />
        <button
          type="submit"
        >
          Adicionar Tarefa
        </button>
      </form>
    );
  }
}

// AddTask.propTypes = {
// };
