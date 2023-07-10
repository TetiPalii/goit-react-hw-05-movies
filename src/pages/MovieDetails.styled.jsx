import { GoArrowLeft } from 'react-icons/go';
import styled from 'styled-components';

const Main = styled.main`
  padding: 20px 15px;
`;

const Button = styled.button`
  margin-bottom: 15px;
  cursor: pointer;
`;
const IconBack = styled(GoArrowLeft)`
  &:hover {
    fill: #340691;
  }
`;

const FilmContainer = styled.div`
  padding: 20px;
  border: 1px solid black;
`;
export { Main, Button, IconBack, FilmContainer };
