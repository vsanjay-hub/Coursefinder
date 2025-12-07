import React from 'react';
import './CourseCard.css';

const CourseCard = ({ course }) => {
  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner':
        return '#4caf50';
      case 'Intermediate':
        return '#ff9800';
      case 'Advanced':
        return '#f44336';
      default:
        return '#9e9e9e';
    }
  };

  return (
    <div className="course-card">
      <div className="course-card-header">
        <h3 className="course-title">{course.name}</h3>
        <span 
          className="course-level" 
          style={{ backgroundColor: getLevelColor(course.level) }}
        >
          {course.level}
        </span>
      </div>
      <div className="course-category">{course.category}</div>
      <p className="course-description">{course.description}</p>
      <div className="course-footer">
        <div className="course-info">
          <svg 
            className="info-icon" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span>{course.duration}</span>
        </div>
        <div className="course-info">
          <svg 
            className="info-icon" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span>{course.instructor}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
