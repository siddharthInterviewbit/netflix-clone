// SearchInput.js
import React, { useState } from 'react';
import { useSearch } from './SearchContext';
import "./Search.css";

const SearchInput = () => {
  const { search, setFlag } = useSearch();
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const cancelSearch = () => {
    setQuery('');
    setFlag(false);
  }

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const debouncedSearch = debounce(search, 500);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query) {
        debouncedSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for movies..."
        className="search-input"
      />
      <button type="button" className="cancel-button" onClick={cancelSearch}>X</button>
      <button type="submit" className="search-button">Search</button>
    </form>
  );
};

export default SearchInput;
