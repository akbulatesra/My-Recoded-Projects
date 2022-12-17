import { useEffect, useState } from 'react';
const App = () => {
  const [img, setImg] = useState(null);
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => setImg(data));
  }, []);
  return (
    <div>
      {img === null ? (
        <p>Loading...</p>
      ) : (
        <img src={img?.message} alt="A Random Dog" />
      )}
    </div>
  );
};
export default App;
