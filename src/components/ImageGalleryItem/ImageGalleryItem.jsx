import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';

import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ src, alt, largePhoto }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const showModal = () => {
    setIsShowModal(!isShowModal);
  };

  return (
    <>
      <li className={css.imageGalleryItem} onClick={showModal}>
        <img src={src} alt={alt} className={css.imageGalleryItemImage} />
      </li>
      {isShowModal && <Modal src={largePhoto} alt={alt} onClick={showModal} />}
    </>
  );
};
