import { useEffect, useState } from 'react';
import SearchForm from '../components/searchForm/SearchForm';
import { searchMovie } from 'helpers/moviesFetch';
// import { SearchMoviesList } from 'components/searchMoviesList';
import MoviesList from 'components/moviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  // const [searchQuery, setQuery] = useState('');

  const [queryMovies, setQueryMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  // const query = searchParams.get('query') ?? '';

  const handleSubmit = movieQuery => {
    setSearchParams({ query: movieQuery });
  };
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }
    searchMovie(query).then(({ data: { results } }) => setQueryMovies(results));
  }, [query]);

  return (
    <div>
      <SearchForm handleSubmit={handleSubmit} />
      <MoviesList movies={queryMovies} />
    </div>
  );
};

export default Movies;
