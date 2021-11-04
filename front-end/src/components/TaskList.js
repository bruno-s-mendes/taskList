import React, { Component } from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

export default class TaskList extends Component {
  render() {
    const { taskList, setIsloading, fetchURL } = this.props;
    const list = taskList;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Criação</th>
            <th>Prazo</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {list.length === 0 ? <tr/>
            : list.map((item) => (
              < Task 
                key={item._id}
                setIsloading={setIsloading}
                fetchURL={fetchURL}
                id={item._id}
                description={item.description}
                creation={item.creationDate}
                deadline={item.deadLine}
                status={item.status}
              />
            )) }
          </tbody>
      </table>
    );
  }
}

TaskList.propTypes = {
  setIsloading: PropTypes.func.isRequired,
  fetchURL: PropTypes.string.isRequired,
  taskList: PropTypes.array.isRequired,
};
