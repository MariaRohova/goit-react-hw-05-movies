import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const Key = 'e32ebf70ca38b43bec81f1c3017131c2';

export async function getTrending() {
  return await axios.get(`/trending/movie/day?api_key=${Key}`);
}

export async function searchMovie(query) {
  return await axios.get(
    `/search/movie?api_key=${Key}&language=en-US&query=${query}&page=1&include_adult=false`
  );
}

export async function getMovieInfo(movie_id) {
  return await axios.get(`movie/${movie_id}?api_key=${Key}&language=en-US`);
}

export async function getMovieCredits(movie_id) {
  return await axios.get(
    `movie/${movie_id}/credits?api_key=${Key}&language=en-US`
  );
}

export async function getMovieReviews(movie_id) {
  return await axios.get(
    `movie/${movie_id}/reviews?api_key=${Key}&language=en-US&page=1`
  );
}
