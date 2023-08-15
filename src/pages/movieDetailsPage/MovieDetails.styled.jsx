import { GoArrowLeft } from 'react-icons/go';
import { NavLink } from 'react-router-dom';
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
  @media screen and (min-width: 768px) {
    max-width: 768px;
    align-items: center;
    flex-direction: row;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1200px;
    align-items: center;
    flex-direction: row;
  }

  gap: 16px;
  border: 1px solid rgb(229, 234, 241);
  border-radius: 8px;
  background-color: rgb(243, 246, 249);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;
  margin-bottom: 16px;
  padding: 15px;
`;
const FilmCover = styled.img`
  margin-right: auto;
  margin-left: auto;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const AdditionalInfo = styled.div`
  list-style: none;
  display: flex;
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const InfoItems = styled.li`
  /* &.active {
    color: red;
  }
  /* &:hover,
  &:focus {
    /* transform: scale(1.03); */
  /* border: 1px solid #ffffff87;
    padding: 5px 20px;
    box-shadow: -1px 11px 26px -15px rgba(66, 68, 90, 1);
    border-radius: 30px; */
  /* } */
`;

const LinkTo = styled(NavLink)`
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;
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

const ImageWrap = styled.div`
  max-width: 500px;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

export {
  Button,
  IconBack,
  FilmContainer,
  AdditionalInfo,
  ImageWrap,
  TextWrap,
  FilmCover,
  InfoItems,
  LinkTo,
};
