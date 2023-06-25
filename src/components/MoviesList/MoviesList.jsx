import { useLocation, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MovieList.module.css';

const MoviesList = ({ films }) => {
  const location = useLocation();

  return (
    <ul className={css.moviesList}>
      {films.map(film => (
        <li key={film.id}>
          <NavLink
            className={css.moviesListItem}
            to={`/movies/${film.id}`}
            state={{ from: location }}
          >
            {film.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default MoviesList;
