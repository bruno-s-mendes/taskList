import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class TaskList extends Component {
  // constructor(props) {
  //   super(props);
  // }


  render() {
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

// AddTask.propTypes = {
// };
