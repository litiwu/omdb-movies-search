import React, { useState } from 'react';
import Movies from './Movies';


export default function MovieInfo() {

    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const [showMovies, setShowMovies] = useState(false);
    
    function handleSubmit(e) {
        e.preventDefault();
        async function fetchMyAPI() {
            const searchParam = encodeURIComponent(query);
            const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}&s=${searchParam}&r=json`;
            console.log(apiUrl);
            let response = await fetch(apiUrl);
            response = await response.json();
            console.log(response.Search);
            setMovies(response.Search);
        }
        fetchMyAPI();
        setShowMovies(true);
        setQuery("");
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="queryInput">Search Movie Name:</label>
                <input 
                    id="queryInput" 
                    value={query} 
                    type="text"
                    onChange={e => setQuery(e.target.value)}/>
                <button className="search">Submit</button>
            </form>
            {showMovies ? <Movies movies={movies} /> : <></>}
        </div>
    )
}
