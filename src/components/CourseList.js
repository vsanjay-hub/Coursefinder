import React from 'react';
import CourseCard from './CourseCard';
import './CourseList.css';

const CourseList = ({ courses }) => {
  if (courses.length === 0) {
    return (
      <div className="no-results">
        <svg 
          className="no-results-icon" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <h3>No courses found</h3>
        <p>Try adjusting your search terms</p>
      </div>
    );
  }

  return (
    <div className="course-list">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
