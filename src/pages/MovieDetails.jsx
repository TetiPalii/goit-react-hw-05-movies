import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../helpers/moviesFetch';
import { useEffect, useState } from 'react';
import { Main, IconBack, FilmContainer } from './MovieDetails.styled';

const defaultImg =
  'https://www.weddingsbylomastravel.com/images/paquetes/default.jpg';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState({});
  const location = useLocation();

  const backLink = location.state?.from ?? '/';
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetchMovieDetails(movieId).then(({ data }) => {
      setMovieData({ ...data });
    });
  }, [movieId]);
  return (
    <Main>
      <Link to={backLink}>
        <IconBack size="1.5em" color="black" />
      </Link>
      <FilmContainer>
        <img
          src={
            movieData.poster_path
              ? `https://image.tmdb.org/t/p/w300/${movieData.poster_path}`
              : defaultImg
          }
          alt={movieData.title}
        />
        <h1>{movieData.title}</h1>
        <h3>User score</h3>
        <p>{Math.ceil(movieData.vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{movieData.overview}</p>
        <h3>Genres</h3>
        <p>
          {movieData.genres
            ? movieData.genres.map(genre => genre.name)
            : 'No information'}
        </p>
      </FilmContainer>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={{ from: '/' }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: '/' }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </Main>
  );
};

export default MovieDetails;