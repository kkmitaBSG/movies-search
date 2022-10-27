import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  BiCameraMovie as BiCameraMovieBase,
  BiArrowToTop as BiArrowToTopBase,
} from "react-icons/bi";

export const Title = styled(NavLink)`
  display: inline-block;
  font-size: 40px;
  text-decoration: none;
  font-weight: bold;
  color: #fff;
  margin: 30px 0;
`;

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 60px;
  justify-content: center;
`;

export const Loader = styled.div`
  width: 100%;
  margin: 50px;
  text-align: center;
`;

export const Header = styled.header<{ isScrollTop?: boolean }>`
  position: sticky;
  top: 0;
  background-color: #191919;
  padding: 0 60px 20px;
  margin-bottom: 20px;
  z-index: 1;

  ${({ isScrollTop }) => !isScrollTop && "box-shadow: 0px 16px 40px black;"}
  transition: box-shadow 0.3s ease-in-out;
`;

export const BiCameraMovie = styled(BiCameraMovieBase)`
  width: 40px;
  height: 40px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 38px;
  margin-left: 22px;
`;

export const JumpTop = styled.div`
  position: fixed;
  bottom: 26px;
  right: 26px;
  box-shadow: 0 0 10px black;
  padding: 20px;
  border-radius: 100%;
  background-color: #00000090;
  border: 1px solid #434343;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #252525;
  }
`;

export const BiArrowToTop = styled(BiArrowToTopBase)`
  width: 36px;
  height: 36px;
`;
