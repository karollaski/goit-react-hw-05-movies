import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchActors } from 'service/Api';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchActorsOfMovie = async () => {
      setLoading(true);

      fetchActors(movieId)
        .then(actors => {
          setActors(actors);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchActorsOfMovie();
  }, [movieId]);

  return (
    <div className={css.wrapper}>
      {loading ? <div>Loading...</div> : null}

      <ul className={css.actorsList}>
        {actors.map(({ id, profile_path, original_name, name, character }) => (
          <li className={css.actorsListItem} key={id}>
            <img
              width="200px"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png'
              }
              alt={original_name}
            />
            <div>
              <p>{name}</p>
              <p>Character: {character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
