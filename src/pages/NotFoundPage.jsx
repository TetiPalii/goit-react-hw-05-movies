import { NavLink } from 'react-router-dom';

export const NotFoundpage = () => (
  <div>
    Oops,the page is not found. Go <NavLink to="/">home</NavLink>
  </div>
);
