import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getStudentsFromServer } from '../actionCreators';

class AllStudents extends Component {
  componentDidMount() {
    this.props.loadStudents();
  }

  render() {
    const students = this.props.allStudents || [];
    return (
      <div className="center">
        <ul className="profileList">
          {students.map(student => {
            return (
              <div key={student.id}>
                <div className="profileElem">
                  {student.firstName}{' '}{student.lastName}
                  <Link to={`/students/${student.id}`}><img src={student.imageUrl} className="profileImage" /></Link>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allStudents: state.students,
    state: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadStudents: () => {
      const thunkAction = getStudentsFromServer();
      dispatch(thunkAction);
    },
  };
};

const ConnectedAllStudentsComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllStudents);

export default ConnectedAllStudentsComponent;
