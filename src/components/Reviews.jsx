import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReview } from 'helpers/moviesFetch';
const Reviews = () => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieReview(movieId).then(({ data: { results } }) =>
      setReview(results)
    );
  }, [movieId]);

  return (
    <div>
      {review.length > 0 ? (
        <ul>
          {review.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>"We don`t have any reviews for this movie"</p>
      )}
    </div>
  );
};
export default Reviews;
