import axios from 'axios'

export const GET_CAMPUSES = 'GET_CAMPUSES'
export const GET_STUDENTS = 'GET_STUDENTS'

//synchronous action creators
/////////////////////////////
//CAMPUS
export const loadCampuses = (campuses) => {
  return {
    type: GET_CAMPUSES,
    campuses
  }
}

//STUDENT
export const loadStudents = (students) => {
  return {
    type: GET_STUDENTS,
    students
  }
}

/////////////////////////////
//async CAMPUS action creators
/////////////////////////////
//CAMPUS
export const getCampusesFromServer = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/campuses')
      dispatch(loadCampuses(data))
    } catch (error) {
      console.error(error)
    }
  }
}

//STUDENT
export const getStudentsFromServer = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/students')
      dispatch(loadStudents(data))
    } catch (error) {
      console.error(error)
    }
  }
}
