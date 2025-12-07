import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './QuoteDisplay.css';

// Fallback quotes in case API fails
const fallbackQuotes = [
  { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
  { text: "The beautiful thing about learning is that nobody can take it away from you.", author: "B.B. King" },
  { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
  { text: "The expert in anything was once a beginner.", author: "Helen Hayes" },
  { text: "Learning never exhausts the mind.", author: "Leonardo da Vinci" }
];

const QuoteDisplay = () => {
  const [quote, setQuote] = useState({ text: '', author: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    fetchQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      setError(null);
      
      if (useFallback) {
        // Use fallback quotes
        const randomQuote = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
        setQuote(randomQuote);
        setLoading(false);
        return;
      }
      
      // Try to fetch from API
      const response = await axios.get('https://api.quotable.io/random', {
        timeout: 5000 // 5 second timeout
      });
      setQuote({
        text: response.data.content,
        author: response.data.author
      });
      console.log('Quote fetched successfully:', response.data);
    } catch (err) {
      console.error('Error fetching quote:', err);
      // Use fallback on error
      setUseFallback(true);
      const randomQuote = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
      setQuote(randomQuote);
      setError(null); // Don't show error, just use fallback
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="quote-container">
        <div className="quote-loading">Loading inspiration...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="quote-container">
        <div className="quote-error">{error}</div>
      </div>
    );
  }

  return (
    <div className="quote-container">
      <svg 
        className="quote-icon" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
      </svg>
      <blockquote className="quote-text">"{quote.text}"</blockquote>
      <p className="quote-author">— {quote.author}</p>
      <button className="quote-refresh" onClick={fetchQuote}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <polyline points="23 4 23 10 17 10"></polyline>
          <polyline points="1 20 1 14 7 14"></polyline>
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
        </svg>
        New Quote
      </button>
    </div>
  );
};

export default QuoteDisplay;
