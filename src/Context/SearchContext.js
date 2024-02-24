// SearchContext.js
import React, { createContext, useState, useContext } from 'react';
import axios from '../api/axios';
import requests from '../api/requests';

const SearchContext = createContext();

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [flag, setFlag] = useState(false);

  const search = async (query) => {
    setLoading(true);
    try {
        const response = await axios.get(`${requests.search}&query=${query}`)
        setResults(response.data.results);
        setFlag(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  return (
    <SearchContext.Provider value={{ query, setQuery, results, loading, search, flag, setFlag }}>
      {children}
    </SearchContext.Provider>
  );
};
