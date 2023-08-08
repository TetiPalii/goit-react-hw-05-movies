import { useLocation } from 'react-router-dom';
import {
  List,
  LinkStyled,
  Title,
  Item,
  Image,
  TitleContainer,
} from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  console.log(movies);
  return (
    <div className="container">
      <List>
        {movies.length > 0 &&
          movies.map(movie => (
            <Item key={movie.id}>
              <LinkStyled to={`/movies/${movie.id}`} state={{ from: location }}>
                <Image
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : `https://www.weddingsbylomastravel.com/images/paquetes/default.jpg`
                  }
                  alt=""
                />

                <TitleContainer>
                  <Title> {movie.title}</Title>
                </TitleContainer>
              </LinkStyled>
            </Item>
          ))}
      </List>
    </div>
  );
};
export default MoviesList;
