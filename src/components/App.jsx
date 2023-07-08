import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));
const MoviesList = lazy(() => import('./MoviesList'));
const SearchForm = lazy(() => import('./SearchForm'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />}>
          <Route path="movies/:id" elements={<MovieDetails />} />
          <Route path="cast" elements={<Cast />} />
          <Route path="reviews" elements={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
