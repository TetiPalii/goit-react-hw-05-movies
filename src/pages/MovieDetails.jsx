import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../helpers/moviesFetch';
import { useEffect, useState } from 'react';

// import { Outlet } from 'react-router-dom';

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const location = useLocation();
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieDetails(movieId).then(({ data }) => {
      console.log(data.poster_path);
      setDetails({ ...data });
    });
  }, [movieId]);
  return (
    <main>
      <Link to={location.state.from}>
        <button type="button">Go back</button>
      </Link>
      <div>
        {' '}
        <img src={details.poster_path} alt={details.title} />
        <h1>{details.title}</h1>
      </div>
    </main>
  );
};

export default MovieDetails;
