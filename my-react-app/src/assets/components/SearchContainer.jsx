import React, { useState } from 'react';
import '../styles/SearchContainer.css'; // Import the CSS file for SearchContainer

const SearchContainer = () => {
    const [searchInput, setSearchInput] = useState('');
    const [libraryResults, setLibraryResults] = useState([]);
    const [wikiResults, setWikiResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = () => {
        if (searchInput.trim() === '') {
            return; // Don't search if input is empty
        }

        setLoading(true);

        // Search for books (Library Management)
        const libraryUrl = `https://apis.ccbp.in/book-store?title=${encodeURIComponent(searchInput)}`;
        fetch(libraryUrl)
            .then(response => response.json())
            .then(data => {
                setLibraryResults(data.search_results || []);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching library data:', error);
                setLoading(false);
            });

        // Search in wiki
        const wikiUrl = `https://apis.ccbp.in/wiki-search?search=${encodeURIComponent(searchInput)}`;
        fetch(wikiUrl)
            .then(response => response.json())
            .then(data => {
                setWikiResults(data.search_results || []);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching wiki data:', error);
                setLoading(false);
            });
    };

    return (
        <div className="search-container">
            <div className="search-bar">
                <input
                    type="search"
                    placeholder="Type a keyword and press Enter to search"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                />
            </div>
            <div className="search-results">
                {loading && <p>Loading...</p>}
                {!loading && (
                    <div className="combined-results">
                        <div className="library-results">
                            <h2>Library Results</h2>
                            <div className="library-results-list">
                                {libraryResults.length === 0 && <p>No results found</p>}
                                {libraryResults.map(result => (
                                    <div key={result.id} className="result-item">
                                        <div className="result-content">
                                            <img src={result.imageLink} alt={result.title} />
                                            <p className="result-title">{result.title}</p>
                                            <p className="result-author">{result.author}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="wiki-results">
                            <h2>Wiki Results</h2>
                            <div className="wiki-results-list">
                                {wikiResults.length === 0 && <p>No results found</p>}
                                {wikiResults.map(result => (
                                    <div key={result.title} >
                                        <div className="result-content">
                                            <p className="result-title"><a href={result.link} target="_blank" rel="noopener noreferrer">{result.title}</a></p>
                                            <p className="result-description">{result.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchContainer;
