import { Link, useLocation } from 'react-router-dom';
import { List, LinkStyled } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.length > 0 &&
        movies.map(movie => (
          <li key={movie.id}>
            <LinkStyled to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </LinkStyled>
          </li>
        ))}
    </List>
  );
};
export default MoviesList;
