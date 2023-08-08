import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// const HeaderContainer = styled.div`
//   padding: 15px;
//   max-width: 1440px;
// `;
const Header = styled.header`
  position: sticky;
  top: -1px;
  z-index: 1100;
  display: flex;
  align-items: flex-start;
  background-color: #e9edf0;
  padding: 20px 15px;
  box-shadow: -1px 11px 26px -15px rgba(66, 68, 90, 1);
`;

const NavList = styled.ul`
  display: flex;
  align-items: flex-start;
  list-style: none;
`;
const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;
const NaviLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 600;
  font-size: 25px;
  color: black;
  transition: box-shadow ease-in 250ms;

  &.active {
    color: red;
  }
  &:hover,
  &:focus {
    /* transform: scale(1.03); */
    border: 1px solid #ffffff87;
    padding: 5px 20px;
    box-shadow: -1px 11px 26px -15px rgba(66, 68, 90, 1);
    border-radius: 30px;
  }
`;

export { Header, NaviLink, NavList, NavItem };
