import React from 'react';
import { movies } from '../data';

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((item, key) => {
        return (
          <div key={key}>
            {item.title}
            {item.time}
            <ul>
              {item.genres.map((item, key) => {
                return <li key={key}>{item}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Movies;
