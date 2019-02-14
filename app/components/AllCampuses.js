import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCampusesFromServer } from '../actionCreators';

class AllCampuses extends Component {
  componentDidMount() {
    this.props.loadCampuses();
  }

  render() {
    const campuses = this.props.allCampuses || [];

    return (
      <div className="center">
        <ul className="profileList">
          {campuses.map(campus => {
            return (
              <div key={campus.id}>
                <div className="profileElem">
                  <div id="campusName">{campus.name}</div>
                  <Link to={`/campuses/${campus.id}`}> <img src={campus.imageUrl} className="profileImage" /> </Link>
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
    allCampuses: state.campuses,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadCampuses: () => {
      const thunkAction = getCampusesFromServer();
      dispatch(thunkAction);
    },
  };
};

const ConnectedAllCampusesComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCampuses);

export default ConnectedAllCampusesComponent;
