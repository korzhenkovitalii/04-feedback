import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import css from './ImageGallery.module.css';

export const ImageGallery = ({ pictures }) => {
  return (
    <div className={css.imageGallery}>
      {pictures.map(el => (
        <ImageGalleryItem
          key={el.id}
          src={el.previewURL}
          alt={el.tags}
          largePhoto={el.largeImageURL}
        />
      ))}
    </div>
  );
};
