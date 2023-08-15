import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../helpers/moviesFetch';
import { useEffect, useState } from 'react';
import {
  IconBack,
  FilmContainer,
  AdditionalInfo,
  ImageWrap,
  TextWrap,
  FilmCover,
  InfoItems,
  LinkTo,
} from './MovieDetails.styled';
import { Section } from 'components/section/Section';

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
    <Section>
      <Link to={backLink}>
        <IconBack size="1.5em" color="black" />
      </Link>
      <FilmContainer>
        <ImageWrap>
          <FilmCover
            src={
              movieData.poster_path
                ? `https://image.tmdb.org/t/p/w300/${movieData.poster_path}`
                : defaultImg
            }
            alt={movieData.title}
          />
        </ImageWrap>
        <TextWrap>
          <h1>{movieData.title}</h1>
          <p>User score: {Math.ceil(movieData.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movieData.overview}</p>
          <h3>Genres</h3>
          <p>
            {movieData.genres
              ? movieData.genres.map(genre => genre.name)
              : 'No information'}
          </p>
        </TextWrap>
      </FilmContainer>
      <div className="container">
        <h3>Additional information</h3>
        <AdditionalInfo>
          <InfoItems>
            <LinkTo to="cast" state={{ from: '/' }}>
              Cast
            </LinkTo>
          </InfoItems>
          <InfoItems>
            <LinkTo to="reviews" state={{ from: '/' }}>
              Reviews
            </LinkTo>
          </InfoItems>
        </AdditionalInfo>
        <Outlet />
      </div>
    </Section>
  );
};

export default MovieDetails;
