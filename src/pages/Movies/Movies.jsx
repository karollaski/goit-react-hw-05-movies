import { useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { fetchMoviesByKeyword } from 'service/Api';
import css from './Movies.module.css';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  fetchMoviesByKeyword(query)
    .then(searchResults => {
      setSearchFilms(searchResults);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });

  const updateQueryString = query => {
    const nextParams = query !== '' && { query };
    setSearchParams(nextParams);
  };

  return (
    <main className={css.wrapper}>
      <SearchForm value={query} onChange={updateQueryString} />
      {loading ? <div>Loading...</div> : null}
      {searchFilms ? <MoviesList films={searchFilms} /> : null}
    </main>
  );
};

export default Movies;
