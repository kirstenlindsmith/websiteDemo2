import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getOneCampusFromServer,
  getEnrolledStudentsFromServer,
} from '../actionCreators';

class SingleCampus extends Component {
  componentDidMount() {
    this.props.loadOneCampus();
    this.props.loadEnrolledStudents();
  }

  render() {
    const campus = this.props.campus;
    const students = this.props.students;

    const enrolledStudentsClass = students.length ? '' : 'hidden';
    const noStudentsClass = students.length ? 'hidden' : '';

    return (
      <div>
        <div className="profileSingle">
          <h2 className="pageTitle">{campus.name}</h2>
          <p className="smallText">{campus.address}</p>
          <p className="description">{campus.description}</p>
          <img src={campus.imageUrl} className="singleImage" />

          <div id="enrolledStudents" className={enrolledStudentsClass}>
            <h4>Enrolled Students: </h4>
            <ul className="enrolledStudents">
              {students.map(student => {
                return (
                  <div key={student.id}>
                    <li>
                      <Link to={`/students/${student.id}`}>
                        {student.firstName} {student.lastName}
                      </Link>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
          <div id="enrolledStudents" className={noStudentsClass}>
            <p>
              No students registered at this campus.
              <br />Interested in becoming a student?{' '}
              <Link to="/students/add" className="enrollLink">
                Click here to enroll!
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    campus: state.selectedCampus,
    students: state.enrolledStudents,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadOneCampus: () => {
      const campusId = ownProps.match.params.campusId;
      const thunkAction = getOneCampusFromServer(campusId);
      dispatch(thunkAction);
    },
    loadEnrolledStudents: () => {
      const campusId = ownProps.match.params.campusId;
      const thunkAction = getEnrolledStudentsFromServer(campusId);
      dispatch(thunkAction);
    },
  };
};

const ConnectedSingleCampusComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCampus);

export default ConnectedSingleCampusComponent;
