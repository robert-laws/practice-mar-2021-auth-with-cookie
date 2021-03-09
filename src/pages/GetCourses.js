import React, { useContext, useEffect, useState } from 'react';
import CoursesContext from '../context/courses/coursesContext';

export const GetCourses = () => {
  const coursesContext = useContext(CoursesContext);
  const { getCourses, courses, loadingCourses } = coursesContext;

  const [selectedCourse, setSelectedCourse] = useState('');
  const [courseDetail, setCourseDetail] = useState({});

  const handleChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  useEffect(() => {
    if (selectedCourse !== '') {
      let detail = courses.filter(
        (course) => course.title.rendered === selectedCourse
      );

      setCourseDetail((prevState) => {
        return {
          ...prevState,
          ...detail[0],
        };
      });
    } else {
      setCourseDetail({});
    }
  }, [courses, selectedCourse]);

  useEffect(() => {
    getCourses();
  }, [getCourses]);

  const isEmptyObject = (object) => {
    for (var key in object) {
      if (object.hasOwnProperty(key)) return false;
    }
    return true;
  };

  return (
    <div>
      <h1>All Courses</h1>
      {loadingCourses ? (
        <div>loading...</div>
      ) : (
        <>
          <label>
            Courses:
            <select value={selectedCourse} onChange={handleChange}>
              <option key={0} value={''}>
                Select a Course
              </option>
              {courses &&
                courses.map((course) => {
                  return (
                    <option key={course.id} value={course.title.rendered}>
                      {course.title.rendered}
                    </option>
                  );
                })}
            </select>
          </label>
          <p>
            Course Name:{' '}
            {!isEmptyObject(courseDetail) && courseDetail.acf.course_name}
          </p>
          <p>
            Faculty: {!isEmptyObject(courseDetail) && courseDetail.acf.faculty}
          </p>
          <p>
            Semester:{' '}
            {!isEmptyObject(courseDetail) && courseDetail.acf.semester}{' '}
          </p>
          <p>Year: {!isEmptyObject(courseDetail) && courseDetail.acf.year}</p>
        </>
      )}
    </div>
  );
};
