import React, { Component } from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

export default class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderedList: [],
      orderBy: 'description',
    }
    this.order = this.order.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.taskList !== this.props.taskList) {
      this.order();
    }
    if (prevState.orderBy !== this.state.orderBy) {
      this.order();
    }
  }

  order = () =>{
    const { taskList } = this.props;
    const { orderBy } = this.state;

    const ordered = taskList.sort((a, b) => {
      let fa = a[orderBy].toLowerCase();
      let fb = b[orderBy].toLowerCase();
      if (fa < fb) {
          return -1;
      }
      if (fa > fb) {
          return 1;
      }
      return 0;
    });
    this.setState({ orderedList: ordered });
  }

  render() {
    const { setIsloading, fetchURL, statusList } = this.props;
    const { orderedList } = this.state;
    const list = orderedList;
    return (
      <table>
        <thead>
          <tr>
            <th><button
              onClick={ () => this.setState({orderBy: 'description'})}
            >Descrição</button></th>
            <th><button
              onClick={ () => this.setState({orderBy: 'creationDate'})}
            >Criação</button></th>
            <th><button
              onClick={ () => this.setState({orderBy: 'deadLine'})}
            >Prazo</button></th>
            <th><button
              onClick={ () => this.setState({orderBy: 'status'})}
            >Status</button></th>
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
                statusList={statusList}
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
