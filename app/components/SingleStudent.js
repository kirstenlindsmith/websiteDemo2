import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getOneStudentFromServer } from '../actionCreators';

class SingleStudent extends Component {
  componentDidMount() {
    this.props.loadOneStudent();
  }

  render() {
    const student = this.props.student;
    const campus = this.props.student.campus || {};

    const enrolledStudentClass = Object.keys(campus).length ? '' : 'hidden';
    const notEnrolledClass = Object.keys(campus).length ? 'hidden' : '';

    return (
      <div>
        <div className="profileSingle">
          <h2 className="pageTitle">
            {student.firstName} {student.lastName}
          </h2>
          <h4 className={enrolledStudentClass}>
            Enrolled Campus:
            <Link to={`/campuses/${campus.id}`} id="studentCampusLink">
              {campus.name}
            </Link>
          </h4>
          <h4 className={notEnrolledClass}>Not Enrolled Student</h4>
          <p className="smallText">GPA: {student.gpa}</p>
          <p className="smallText">{student.email}</p>
          <img src={student.imageUrl} className="singleImage" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    student: state.selectedStudent,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadOneStudent: () => {
      const studentId = ownProps.match.params.studentId;
      const thunkAction = getOneStudentFromServer(studentId);
      dispatch(thunkAction);
    },
  };
};

const ConnectedSingleStudentComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleStudent);

export default ConnectedSingleStudentComponent;
