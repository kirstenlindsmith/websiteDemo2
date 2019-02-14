// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import { combineReducers } from 'redux';

import { GET_CAMPUSES, GET_STUDENTS } from '../actionCreators';

export const allCampusReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CAMPUSES: {
      return action.campuses;
    }
    default:
      return state;
  }
};

export const allStudentReducer = (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS: {
      return action.students;
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({campuses: allCampusReducer, students: allStudentReducer})

export default rootReducer;
