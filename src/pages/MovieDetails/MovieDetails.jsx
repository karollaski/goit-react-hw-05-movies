import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMoviesDetails } from 'service/Api';
import css from './MoviesDetails.module.css';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchMovieDetailsFilms = () => {
      setLoading(true);

      fetchMoviesDetails(movieId)
        .then(detailMovie => {
          setMovieInfo(detailMovie);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchMovieDetailsFilms();
  }, [movieId]);

  if (!movieInfo) {
    return;
  }

  const {
    title,
    release_date,
    vote_average,
    overview,
    genres,
    poster_path,
    original_title,
  } = movieInfo || {};

  return (
    <div className={css.wrapper}>
      <Link to={location.state?.from ?? '/movies'}>
        <button className={css.btn} type="button">
          Go back
        </button>
      </Link>
      {loading ? <div>Loading...</div> : null}

      {movieInfo && (
        <div className={css.details}>
          <img
            width="300px"
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png'
            }
            alt={original_title}
          />

          <div>
            <h1>
              {title} ({release_date.slice(0, 4)})
            </h1>

            <p>User Score: {Math.round(vote_average * 10)}%</p>

            <h2>Overview</h2>
            <p>{overview}</p>

            <h2>Genres</h2>
            <ul className={css.genresList}>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div>
        <h3>Additional information</h3>
        <ul className={css.linkList}>
          <li>
            <Link className={css.link} to="cast">
              Cast
            </Link>
          </li>
          <li>
            <Link className={css.link} to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MoviesDetails;
