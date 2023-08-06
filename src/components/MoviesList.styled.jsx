import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 15px;
  padding: 0;
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

const Item = styled.li`
  display: flex;
  flex-basis: calc((100% - 30px) / 3);
  max-width: 250px;
  flex-direction: column;
  height: 100%;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  border: 1px solid rgb(229, 234, 241);
  overflow: hidden;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ImageContainer = styled.div`
  height: 400px;
`;
const TitleContainer = styled.div`
  height: 50px;
  padding: 5px;
`;
export { List, LinkStyled, Title, Item, Image, ImageContainer, TitleContainer };
