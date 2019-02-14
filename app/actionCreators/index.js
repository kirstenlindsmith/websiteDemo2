import axios from 'axios'

export const GET_CAMPUSES = 'GET_CAMPUSES'
export const GET_STUDENTS = 'GET_STUDENTS'
export const GET_ONE_CAMPUS = 'GET_ONE_CAMPUS'
export const GET_ONE_STUDENT = 'GET_ONE_STUDENT'
export const GET_ENROLLED_STUDENTS = 'GET_ENROLLED_STUDENTS'

//synchronous action creators
/////////////////////////////
//CAMPUS
export const loadCampuses = (campuses) => {
  return {
    type: GET_CAMPUSES,
    campuses
  }
}

export const loadOneCampus = (campus) => {
  return {
    type: GET_ONE_CAMPUS,
    campus
  }
}

//STUDENT
export const loadStudents = (students) => {
  return {
    type: GET_STUDENTS,
    students
  }
}

export const loadOneStudent = (student) => {
  return {
    type: GET_ONE_STUDENT,
    student
  }
}

export const loadEnrolledStudents = (students) => {
  return {
    type: GET_ENROLLED_STUDENTS,
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

export const getOneCampusFromServer = (campusId) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/campuses/${campusId}`)
      dispatch(loadOneCampus(data))
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

export const getOneStudentFromServer = (studentId) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/students/${studentId}`)
      console.log('studentId:', studentId, 'data:', data)
      dispatch(loadOneStudent(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const getEnrolledStudentsFromServer = (campusId) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/campuses/${campusId}/students`)
      dispatch(loadEnrolledStudents(data))
    } catch (error) {
      console.error(error)
    }
  }
}
