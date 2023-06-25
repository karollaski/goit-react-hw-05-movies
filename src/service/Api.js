import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '32a23429c25892a6d3283f9f7a38d6eb';

export const fetchTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);

  if (response.status !== 200) {
    console.log('Ooopsss! Not work!');
    throw new Error(response.status);
  }

  const data = await response.data.results;
  return data;
};

export const fetchMoviesByKeyword = async keyword => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${keyword}`
  );

  if (response.status !== 200) {
    console.log('Ooopsss! Not work!');
    throw new Error(response.status);
  }

  const data = await response.data.results;
  return data;
};

export const fetchMoviesDetails = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  if (response.status !== 200) {
    console.log('Ooopsss! Not work!');
    throw new Error(response.status);
  }

  const data = await response.data;

  return data;
};

export const fetchActors = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  if (response.status !== 200) {
    console.log('Ooopsss! Not work!');
    throw new Error(response.status);
  }

  const data = await response.data.cast;
  return data;
};

export const fetchReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  if (response.status !== 200) {
    console.log('Ooopsss! Not work!');
    throw new Error(response.status);
  }

  const data = await response.data.results;
  return data;
};
