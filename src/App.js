import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CourseList from './components/CourseList';
import QuoteDisplay from './components/QuoteDisplay';
import coursesData from './data/courses.json';
import './App.css';

function App() {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    setCourses(coursesData);
    setFilteredCourses(coursesData);
  }, []);

  useEffect(() => {
    const filtered = courses.filter(course =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(filtered);
  }, [searchTerm, courses]);

  return (
    <div className="App">
      <header className="app-header">
        <div className="container">
          <h1 className="app-title">
            <svg 
              className="title-icon" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            Course Finder
          </h1>
          <p className="app-subtitle">Discover your next learning adventure</p>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <QuoteDisplay />
          
          <div className="search-section">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <div className="results-count">
              {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'} found
            </div>
          </div>

          <CourseList courses={filteredCourses} />
        </div>
      </main>

      <footer className="app-footer">
        <div className="container">
          <p>&copy; 2025 Course Finder. Built with React.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
