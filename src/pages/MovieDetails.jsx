import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../helpers/moviesFetch';
import { useEffect, useState } from 'react';
const defaultImg =
  'https://www.weddingsbylomastravel.com/images/paquetes/default.jpg';
// import { Outlet } from 'react-router-dom';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState({});
  const location = useLocation();
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetchMovieDetails(movieId).then(({ data }) => {
      console.log(data);

      setMovieData({ ...data });
    });
  }, [movieId]);
  return (
    <main>
      <Link to={location.state.from}>
        <button type="button">Go back</button>
      </Link>
      <div>
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
      </div>
    </main>
  );
};

export default MovieDetails;
