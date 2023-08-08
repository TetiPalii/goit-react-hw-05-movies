import MoviesList from 'components/moviesList/MoviesList';
import { fetchTrendingMovies } from 'helpers/moviesFetch';
import { useEffect, useState } from 'react';

import { Section } from 'components/section/Section';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(({ data: { results } }) => setMovies(results));
  }, []);
  return (
    <Section title={'Trending today'}>
      <MoviesList movies={movies} />
    </Section>
  );
};

export default Home;
