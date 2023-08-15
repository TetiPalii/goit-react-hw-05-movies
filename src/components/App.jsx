import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './sharedLayout/SharedLayout';
import { NotFoundpage } from 'pages/NotFoundPage';

const Home = lazy(() => import('../pages/homePage/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() =>
  import('../pages/movieDetailsPage/MovieDetails')
);
const Cast = lazy(() => import('./cast/Cast'));
const Reviews = lazy(() => import('./Reviews'));
// const MoviesList = lazy(() => import('./MoviesList'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          <Route />
        </Route>
        <Route path="*" element={<NotFoundpage />} />
      </Route>
    </Routes>
  );
};
