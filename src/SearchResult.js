// SearchResult.js
import React from 'react';
import { useSearch } from './SearchContext';
import "./SearchResult.css";

const SearchResult = () => {
  const { results, loading, flag } = useSearch();

  return (
    <div className="search-results">
      {loading && <p>Loading...</p>}
      {flag && results.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="movie-poster" />
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
