import axios from 'axios';
const API_KEY = '7d14207d169f7b0a78fd4813f8c21637';

const movies = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization: API_KEY,
  },
});

export async function fetchTrendingMovies() {
  try {
    const response = await movies.get(`trending/movie/day?api_key=${API_KEY}
    `);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieDetails(id) {
  try {
    const response = await movies.get(`movie/${id}?api_key=${API_KEY}
    `);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieCast(id) {
  try {
    const response = await movies.get(`movie/${id}/credits?api_key=${API_KEY}
    `);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieReview(id) {
  try {
    const response = await movies.get(`movie/${id}/reviews?api_key=${API_KEY}
    `);
    return response;
  } catch (error) {
    console.error(error);
  }
}
