import React, { useState, useEffect } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import { fetchTrending } from 'service/Api';
import css from './Home.module.css';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingFilms = async () => {
      setLoading(true);

      fetchTrending()
        .then(trendingFilms => {
          setFilms(trendingFilms);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchTrendingFilms();
  }, []);

  return (
    <main className={css.wrapper}>
      <h1>Trendind today</h1>
      <MoviesList films={films} />

      {loading ? <div>Loading...</div> : null}
    </main>
  );
};

export default Home;
