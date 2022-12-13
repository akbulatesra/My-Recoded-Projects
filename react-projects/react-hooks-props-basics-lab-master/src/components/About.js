import React from 'react';
import Links from './Links';

function About({ bio }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio ? <p>{bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links
        github={'https://github.com/liza'}
        linkedin={'https://www.linkedin.com/in/liza/'}
      />
    </div>
  );
}

export default About;
