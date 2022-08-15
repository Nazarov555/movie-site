
import {useEffect, useState} from 'react';
import './App.css'
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
//b1c32342
const API_URL = 'https://www.omdbapi.com?apikey=b1c32342'



const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className="app">
      <h1>Мир фильмов</h1>
      <p><i>от Назарова Кэскил</i></p>
      <p>Наслаждайтесь :-)</p>
      <h2>P.S. сайт для фильмов понимает только по английски и не показывает фильмы </h2>

      <div className="search">
        <input 
          placeholder="Поиск фильма..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="Поиск"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0
        ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie}/>
            ))}
          </div>
          ) : (
            <div className="empty">
              <h2>Фильмы не найдены, простите пожалуйста :(</h2>
            </div>
          )}
    </div>
  );
}

export default App;
