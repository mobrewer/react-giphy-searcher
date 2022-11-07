import React from 'react';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import { useState } from 'react';
import { useEffect} from 'react';


function App() {
  const searchOptions = {
    key: 'ZldMm0pgatlNVT0xep6kywlinLn2dBoy',
    limit: 25,
    rating: 'G',
    api: 'https://api.giphy.com/v1/gifs',
    endpoint: '/search'
  };
  console.log(searchOptions.api);

  const [images, setImages] = useState([]);
  useEffect(() => {
    getImages();
  }, []);

   return (
    <div>
      <h1>Giphy Searcher</h1>
      <SearchForm />
      <SearchResults images={images}/>
    </div>
  );

  function getImages() {
    const searchString = 'minions';
    /* Build a URL from the searchOptions object */
    const url = `${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&q=${searchString} &limit=${searchOptions.limit}&offset=${searchOptions.offset}&rating=${searchOptions.rating}&lang=en`;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        setImages(response.data);
      })
      .catch(console.error);
  }
 

}

export default App;

