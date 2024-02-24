// SearchInput.js
import React, { useState } from 'react';
import { useSearch } from '../../Context/SearchContext';
import "./Search.css";
import { useHistory } from 'react-router-dom';

const SearchInput = () => {
  const { search, setFlag, flag, query, setQuery } = useSearch();
  const history = useHistory();

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const cancelSearch = () => {
    setQuery('');
    setFlag(false);
    history.push('/');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query) {
      search(query);
      history.push(`/search/${encodeURIComponent(query)}`);
    }
  };

  return (
    <div  className="search-form">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for movies..."
        className="search-input"
      />
      {flag && <button type="button" className="cancel-button" onClick={cancelSearch}>X</button>}
      {!flag && <button type="submit" className="search-button" onClick={handleSubmit}>Search</button>}
    </div>
  );
};

export default SearchInput;
