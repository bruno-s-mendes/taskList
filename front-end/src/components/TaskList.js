import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TaskList extends Component {
  constructor(props) {
    super(props);
    const { isloading, fetchURL } = this.props;
    this.state = {
      isloading,
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
    .then(data => console.log(data))
    // .then(data => this.setState({ taskList: data }))
    .catch(error => {
      console.error('There was an error!', error);
  });;
  }


  render() {
    if (this.props.isLoading) {
      this.props.setIsloading(false);
      this.fetchtasks();
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
  isloading: PropTypes.bool.isRequired,
  fetchURL: PropTypes.string.isRequired,
};
