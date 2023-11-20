import { Searchbar } from './Searchbar/Searchbar';
import { getPictures } from './API/API';

import css from './App.module.css';
import { useEffect, useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';

export const App = () => {
  const [query, setQuery] = useState('');
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }
    // const getPictures(query)
    getPictures(query).then(data => {
      setPictures(data);
    });
  }, [query]);

  return (
    <div className={css.app}>
      <Searchbar setQuery={setQuery} />
      {pictures.length > 0 ? <ImageGallery pictures={pictures} /> : null}
    </div>
  );
};
