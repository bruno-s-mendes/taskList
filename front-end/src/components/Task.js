import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

class Task extends Component {
  constructor(props) {
    super(props);
    const { fetchURL } = this.props;
    this.state = {
      fetchURL,
      statusList: [],
    }
  }
  render() {
    const { description, creation, deadline, status, id } = this.props;
    console.log(id);
    return (
      <tr>
      <td>{description}</td>
      <td>{creation}</td>
      <td>{deadline}</td>
      <td>{status}</td>
    </tr>
    );
  }
}

// Task.propTypes = {
//   item: PropTypes.objectOf(PropTypes.any).isRequired,
//   itemId: PropTypes.string.isRequired,
// };

export default Task;
