import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`movies/${movie.id}`} state={{ from: '/' }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MoviesList;
