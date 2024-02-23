import React from 'react';
import './App.css';
import Nav from './Nav';
import { SearchProvider } from './SearchContext';
import SearchResult from './SearchResult';
import Main from './Main';


// import Search from './Search';

function App() {
	return (
		<div className="app">
			<SearchProvider>

				<Nav />
				<SearchResult />
				<Main />
			</SearchProvider>
		</div>
	);
}

export default App;
