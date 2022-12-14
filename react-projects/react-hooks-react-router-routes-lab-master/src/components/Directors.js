import React from 'react';
import { directors } from '../data';

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      <div>
        {directors.map((item, key) => {
          return (
            <div key={key}>
              <div>{item.name}</div>
              <ul>
                {item.movies.map((item, key) => {
                  return <li key={key}>{item}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Directors;
