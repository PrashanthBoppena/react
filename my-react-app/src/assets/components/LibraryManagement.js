import React, { useState } from 'react';
import '../styles/libraryMgmnt.css';

const LibraryManagement = () => {
  const [searchInputVal, setSearchInputVal] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setSearchInputVal(event.target.value);
  };

  const handleSearch = () => {
    if (searchInputVal.trim() === '') {
      return; // Don't search if input is empty
    }

    setLoading(true);

    const url = `https://apis.ccbp.in/book-store?title=${encodeURIComponent(searchInputVal)}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data.search_results || []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  const openBookPage = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="library-management-container">
      <div className="search-container">
        <h1>Library Management</h1>
        <div className="search-bar">
          <input
            id="searchInput"
            type="search"
            placeholder="Type book title"
            value={searchInputVal}
            onChange={handleInputChange}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleSearch();
              }
            }}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      <div className="results-container">
        <div className="results">
          {loading && <p>Loading...</p>}
          {!loading && searchResults.length === 0 && <p>No results found</p>}
          {!loading && searchResults.length > 0 && (
            <div className="books-list">
              {searchResults.map((result, index) => (
                <div key={index} className="book-item" onClick={() => openBookPage(result.imageLink)}>
                  <img src={result.imageLink} alt={result.title} />
                  <p>{result.author}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LibraryManagement;
