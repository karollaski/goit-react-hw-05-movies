import css from './SerachForm.module.css';

const SearchForm = ({ value, onChange }) => {
  return (
    <div className={css.wrapper}>
      <p className={css.searchText}>Search movies:</p>
      <form className={css.form}>
        <input
          className={css.input}
          type="text"
          name="query"
          autoFocus
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchForm;
