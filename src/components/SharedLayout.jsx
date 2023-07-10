import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';
import { Container, NaviLink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <div>
      <Container>
        <NaviLink to="/">Home</NaviLink>
        <NaviLink to="/movies">Movies</NaviLink>
      </Container>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
