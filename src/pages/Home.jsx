import MoviesList from 'components/MoviesList';
import { fetchTrendingMovies } from 'helpers/moviesFetch';
import { useEffect, useState } from 'react';
import { Container, Heading } from 'pages/Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(({ data: { results } }) => setMovies(results));
  }, []);
  return (
    <Container>
      <Heading>Trending today</Heading>
      <MoviesList movies={movies} />
    </Container>
  );
};

export default Home;
