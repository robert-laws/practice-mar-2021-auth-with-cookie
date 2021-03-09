import { GET_COURSES, GET_COURSE } from '../types';

const coursesReducer = (state, action) => {
  switch (action.type) {
    case GET_COURSE: {
      return {
        ...state,
        course: action.payload,
      };
    }

    case GET_COURSES: {
      return {
        ...state,
        courses: action.payload,
        loadingCourses: false,
      };
    }

    default:
      return state;
  }
};

export default coursesReducer;
