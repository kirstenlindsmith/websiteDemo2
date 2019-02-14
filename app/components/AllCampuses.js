import React, { Component } from 'react';
import { connect } from 'react-redux';
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
                  {campus.name}
                  <img src={campus.imageUrl} className="profileImage" />
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
