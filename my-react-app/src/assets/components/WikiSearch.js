import React, { useState } from 'react';
import '../styles/wikiSearch.css'; // Create App.css for your styles if not already created

const WikiSearch = () => {
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            setLoading(true);
            setSearchResults([]); // Clear previous results

            let url = `https://apis.ccbp.in/wiki-search?search=${searchInput}`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const { search_results } = data;
                    setSearchResults(search_results);
                    setLoading(false);
                });
        }
    };

    const createAndAppendResult = (result) => {
        return (
            <div key={result.title} className="result-item">
                <a className="result-title" href={result.link} target="_blank" rel="noopener noreferrer">{result.title}</a>
                <br />
                <a className="result-url" href={result.link} target="_blank" rel="noopener noreferrer">{result.link}</a>
                <br />
                <p className="link-description">{result.description}</p>
            </div>
        );
    };

    return (
        <div className="main-container">
            <div className="wiki-search-header text-center">
                <img className="wiki-logo" src="https://nkb-backend-otg-media-static.s3.ap-south-1.amazonaws.com/ccbp-dynamic-webapps/wiki-logo-img.png" alt="Wiki Logo" />
                <br />
                <input
                    placeholder="Type a keyword and press Enter to search"
                    type="search"
                    className="search-input w-100"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyDown={handleSearch}
                />
            </div>
            <div className="search-results">
                {loading && <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>}
                {!loading && searchResults.length > 0 &&
                    <div className="dropdown-results">
                        {searchResults.map(result => createAndAppendResult(result))}
                    </div>
                }
            </div>
        </div>
    );
};

export default WikiSearch;
