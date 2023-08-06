import { useLocation } from 'react-router-dom';
import {
  List,
  LinkStyled,
  Title,
  Item,
  Image,
  ImageContainer,
  TitleContainer,
} from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  console.log(movies);
  return (
    <List>
      {movies.length > 0 &&
        movies.map(movie => (
          <Item key={movie.id}>
            <LinkStyled to={`/movies/${movie.id}`} state={{ from: location }}>
              <ImageContainer>
                <Image
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : `https://www.weddingsbylomastravel.com/images/paquetes/default.jpg`
                  }
                  alt=""
                />
              </ImageContainer>
              <TitleContainer>
                <Title> {movie.title}</Title>
              </TitleContainer>
            </LinkStyled>
          </Item>
        ))}
    </List>
  );
};
export default MoviesList;
