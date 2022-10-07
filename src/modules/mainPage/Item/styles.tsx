import styled from "styled-components";

export const Item = styled.div`
  flex: 1 1 auto;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 0 10px #aaa;
  border-radius: 10px;
`;

export const SubElem = styled.div``;

export const Name = styled(SubElem)`
  color: #0025aa;
  font-weight: 500;
`;

export const Desc = styled.span`
  font-size: 0.9em;
  color: #00ac84;
`;
