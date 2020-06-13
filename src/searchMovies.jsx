import React, {useState} from "react";
import './style.css';

export default function SearchMovie(){

  const [query, setQuery] = useState('');
  const searchMovies = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=dd1a0b8b19e1bcc84c378746253b03b8&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data);
        }catch(err){
            console.error(err);
        }
    }
    return (
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Jurassic Park"
                value={query} onChange={(e) => setQuery(e.target.value)}
                />
            <button className="button" type="submit">Search</button>
        </form>
        <div className="card-list">
        </div>
    )
}
