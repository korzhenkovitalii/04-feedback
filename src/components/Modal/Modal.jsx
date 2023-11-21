import css from './modal.module.css';

export const Modal = ({ src, alt }) => {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};
