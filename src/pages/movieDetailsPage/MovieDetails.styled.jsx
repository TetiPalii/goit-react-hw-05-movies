import { GoArrowLeft } from 'react-icons/go';
import styled from 'styled-components';

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
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(229, 234, 241);
  border-radius: 8px;
  background-color: rgb(243, 246, 249);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;
  margin-bottom: 15px;
  padding: 15px;
`;
const AdditionalInfo = styled.div`
  list-style: none;
`;

export { Button, IconBack, FilmContainer, AdditionalInfo };
