import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;

  max-width: 250px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  border: 1px solid rgb(229, 234, 241);
  overflow: hidden;
  &:hover,
  &:focus {
    border-color: rgb(9, 103, 194);
    box-shadow: rgba(0, 0, 0, 0.12) 4px 1px 4px, rgba(0, 0, 0, 0.06) 0px 4px 4px,
      rgba(0, 0, 0, 0.16) 1px 4px 6px;
  }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #0f48e4;
`;

const Title = styled.h3`
  text-align: center;
  margin: 0;
  font-weight: 500;
  font-size: 20px;
  line-height: calc(1.2);
  letter-spacing: 0.02em;
`;

const Image = styled.img`
  height: auto;
  width: 100%;
  object-fit: cover;
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

const TitleContainer = styled.div`
  padding: 5px;
  height: 50px;
`;
export { List, LinkStyled, Title, Item, Image, TitleContainer };
