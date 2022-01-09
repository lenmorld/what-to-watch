import logo from './logo.svg';
import './App.css';

import {FiThumbsUp, FiThumbsDown} from 'react-icons/fi'

import { movie, favorites } from './mocks'

function App() {
  const onThumbsDown = () => {
    // - mark as unliked by this user
    // don't show again
    // next movie
  }

  const onThumbsUp = () => {
    // add to favorites
    // - mark as liked by this user
    // - if also liked by other user > it's a match!

    // add to matches
    // next movie
  }


  const nextMovie = () => {
    // get next movie
  }


  return (
    <div className="App">
      <header className="App-header">
        WHAT TO WATCH?
      </header>
      <main>
      <div className="favorites">
        <h3>Favorites</h3>
        {
          favorites.length && (
            <ul>
              {
                  favorites.map(fave => (
                    <li>
                      <div>
                        <img src={fave.Poster} alt={fave.Title}  />
                      </div>
                    </li>
                  ))
              }
            </ul>
          )
        }
      </div>
      <div className="wanna">
        <h3>Wanna watch this?</h3>
      </div>
      <h2>{movie.Title}</h2>  
      <div className="movie">
        <div className="image">
          <img src={movie.Poster} alt={movie.Title} />
          <button className="nope" onClick={onThumbsDown}>
            <FiThumbsDown />
          </button>
          <button className="yup" onClick={onThumbsUp}>
            <FiThumbsUp />
          </button>
        </div>
        <div className="description">
          <ul>
            <li><strong>Plot:</strong> {movie.Plot}</li>
            <br />
            <li>
              <strong>Rating:</strong>{' '}
              {
                movie.Ratings.map(rating => (
                  <span>{rating.Value}{' '}</span>
                ))
              }
            </li>
          </ul>
        </div>
      </div>
      </main>
    </div>
  );
}

export default App;
