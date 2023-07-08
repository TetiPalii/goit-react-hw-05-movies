import MoviesList from 'components/MoviesList';
import { fetchTrendingMovies } from 'helpers/moviesFetch';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(({ data: { results } }) => setMovies(results));
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
