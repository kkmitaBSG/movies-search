import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Item = styled(NavLink)<{ poster?: string }>`
  flex: 1 1 auto;
  margin: 10px;
  box-shadow: 0 0 10px #737373;
  border-radius: 10px;
  width: 250px;
  height: 450px;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
  color: #FFF;

  ${({ poster }) => poster && `background-image: url(${poster});`}
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const AdditionalInfo = styled.div`
  opacity: 0;
  background-color: #00000090;
  height: 100%;
  padding: 50px 20px 0;
  border-radius: 10px;
  transition: opacity 0.3s ease-out;

  ${Item}:hover & {
    opacity: 1;
  }
`;

export const SubElem = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 13;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Name = styled.div`
  color: #ffbc9e;
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: 500;
  text-align: center;
`;
