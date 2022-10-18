import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Title = styled(NavLink)`
  display: inline-block;
  font-size: 40px;
  text-decoration: none;
  font-weight: bold;
  color: #fff;
  margin: 30px 0;
`;

export const Container = styled.div`
  margin: 0 60px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Loader = styled.div`
  width: 100%;
  margin: 50px;
  text-align: center;
`;
