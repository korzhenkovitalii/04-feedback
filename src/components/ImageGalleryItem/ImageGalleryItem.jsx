import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ src, alt, largePhoto }) => {
  return (
    <li className={css.imageGalleryItem}>
      <img src={src} alt={alt} className={css.imageGalleryItemImage} />
    </li>
  );
};
