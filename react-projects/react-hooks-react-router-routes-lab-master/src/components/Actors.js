import React from 'react';
import { actors } from '../data';

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      <div>
        {actors.map((item, key) => {
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

export default Actors;
