import css from './Searchbar.module.css';

export const Searchbar = ({ setQuery }) => {
  const onChangeQuery = e => {
    e.preventDefault();

    const inputQuery = e.target.elements[1].value;
    setQuery(inputQuery);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={onChangeQuery}>
        <button type="submit" className={css.searchFormButton}>
          <span className={css.searchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
