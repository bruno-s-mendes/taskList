import React, { Component } from 'react';
import Task from './Task';
// import PropTypes from 'prop-types';

export default class TaskList extends Component {
  constructor(props) {
    super(props);
    const { fetchURL } = this.props;
    this.state = {
      fetchURL,
      statusList: [],
    }
  }

  render() {
    const list = this.props.taskList;
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Criação</th>
          <th>Prazo</th>
          <th>Status</th>
        </tr>
        {list.length === 0 ? <span>Adicione uma Tarefa</span>
          : list.map((item) => (
            < Task 
                id={item._id}
                description={item.description}
                creation={item.creation}
                deadline={item.deadline}
                status={item.status}
            />
          )) }       
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

// TaskList.propTypes = {
//   isloading: PropTypes.bool.isRequired,
//   fetchURL: PropTypes.string.isRequired,
// };
