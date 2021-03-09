import React, { useReducer, useCallback } from 'react';
import { GET_COURSES, GET_COURSE } from '../types';
import CoursesContext from './coursesContext';
import coursesReducer from './coursesReducer';

const CoursesState = ({ children }) => {
  const initialState = {
    course: {
      name: '',
      faculty: '',
      semester: '',
      year: '',
    },
    courses: null,
    loadingCourses: true,
    coursesError: null,
  };

  const [state, dispatch] = useReducer(coursesReducer, initialState);

  const restRoot =
    'https://headless-rest.guqlibrary.georgetown.domains/wp-json';

  const getCourses = useCallback(async () => {
    let restURL = `${restRoot}/wp/v2/courses?_fields=id,title,acf&order=asc&per_page=110`;

    try {
      const response = await fetch(restURL);
      const allCourses = await response.json();
      console.log(allCourses);

      if (allCourses) {
        dispatch({ type: GET_COURSES, payload: allCourses });
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  return (
    <CoursesContext.Provider
      value={{
        course: state.course,
        courses: state.courses,
        loadingCourses: state.loadingCourses,
        coursesError: state.coursesError,
        getCourses,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
};

export default CoursesState;
