import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  align-items: flex-start;
  background-color: #e9edf0;
  padding: 20px 15px;
  box-shadow: -1px 11px 26px -15px rgba(66, 68, 90, 1);
  column-gap: 25px;
`;
const NaviLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 600;
  color: black;

  &.active {
    color: red;
  }
`;

export { Container, NaviLink };
