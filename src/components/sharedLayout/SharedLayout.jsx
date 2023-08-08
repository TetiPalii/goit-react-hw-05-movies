import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';
import { Header, NaviLink, NavList, NavItem } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <div className="container">
          <nav>
            <NavList>
              <NavItem>
                <NaviLink to="/">Home</NaviLink>
              </NavItem>
              <NavItem>
                <NaviLink to="/movies">Movies</NaviLink>
              </NavItem>
            </NavList>
          </nav>
        </div>
      </Header>
      <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default SharedLayout;
