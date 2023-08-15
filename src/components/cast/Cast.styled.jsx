import styled from 'styled-components';
const ListContainer = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;
const List = styled.ul`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
  gap: 17px;
  padding: 0px;
  list-style: none;
`;

export { List, ListContainer };
