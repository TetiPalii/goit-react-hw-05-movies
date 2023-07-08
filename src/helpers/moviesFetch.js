import axios from 'axios';
const API_KEY = '7d14207d169f7b0a78fd4813f8c21637';

const movies = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization: API_KEY,
  },
});

async function fetchTrendingMovies() {
  try {
    const response = await movies.get(`trending/movie/day?api_key=${API_KEY}
    `);
    return response;
    // console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export default fetchTrendingMovies;
