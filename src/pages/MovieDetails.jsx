import { Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const id = useParams();
  return <div>{id}</div>;
};

export default MovieDetails;
