const init = () => {
  const inputDOM = document.querySelector('form');
  inputDOM.addEventListener('submit', (e) => e.preventDefault());
  const searchDOM = document.querySelector('#searchByID');
  const title = document.querySelector('section#movieDetails h4');
  const summary = document.querySelector('section#movieDetails p');
  fetch(`http://localhost:3000/movies/${searchDOM.value}`)
    .then((res) => res.json)
    .then((response) => {
      title.innerText = response.title;
      summary.innerText = response.summary;
    });
};

document.addEventListener('DOMContentLoaded', init);
