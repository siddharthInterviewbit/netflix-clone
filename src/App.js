import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import Search from './Pages/Search/Search';
import NotFound from './Pages/NotFound/NotFound';

import { SearchProvider } from './Context/SearchContext';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <SearchProvider>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/search/:query" component={Search} />
          <Route component={NotFound} />
        </Switch>
      </SearchProvider>
    </div>
    );
  }
  
  export default App;
  