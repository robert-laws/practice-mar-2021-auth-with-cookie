import React, { useContext, useEffect } from 'react';
import CoursesContext from '../context/courses/coursesContext';

export const GetCourses = () => {
  const coursesContext = useContext(CoursesContext);
  const { getCourses, courses, loadingCourses } = coursesContext;

  useEffect(() => {
    getCourses();
  }, [getCourses]);

  return (
    <div>
      <h1>All Courses</h1>
      {loadingCourses ? (
        <div>loading...</div>
      ) : (
        <ul>
          {courses &&
            courses.map((course) => {
              return <li key={course.id}>{course.title.rendered}</li>;
            })}
        </ul>
      )}
    </div>
  );
};
