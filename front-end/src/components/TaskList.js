import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TaskList extends Component {
  constructor(props) {
    super(props);
    const { isLoading, fetchURL } = this.props;
    this.state = {
      isLoading,
      fetchURL,
      taskList: [],
      statusList: [],
    }
    this.fetchtasks = this.fetchtasks.bind(this);
  }

  componentDidMount() {
    this.fetchtasks();
  }
  
  fetchtasks = async () => {
    fetch(this.state.fetchURL)
    .then(response => response.json())
    .then(data => this.setState({ taskList: data }))
    .catch(error => {
      console.error('There was an error!', error);
  });;
  }


  render() {
    if (this.state.isLoading) {
      console.log(this.state.isLoading);
      // this.fetchtasks();
    }
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Criação</th>
          <th>Prazo</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>Assistir Aula</td>
          <td>04/11/2021</td>
          <td>04/11/2021</td>
          <td>Pendente</td>
        </tr>
      </table>
    );
  }
}

TaskList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  fetchURL: PropTypes.string.isRequired,
};
