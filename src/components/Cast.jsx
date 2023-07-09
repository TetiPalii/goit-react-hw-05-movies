import { fetchMovieCast } from 'helpers/moviesFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const defaultImg =
  'https://www.weddingsbylomastravel.com/images/paquetes/default.jpg';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetchMovieCast(movieId).then(({ data: { cast } }) => setCast(cast));
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ character, name, id, profile_path }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                : defaultImg
            }
            alt={name}
            width="100"
          />
          <h3>{name}</h3>
          <p>{character}</p>
        </li>
      ))}
    </ul>
  );
};
export default Cast;
