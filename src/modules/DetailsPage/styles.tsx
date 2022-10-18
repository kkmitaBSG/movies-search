import styled from "styled-components";

export const Poster = styled.img`
  width: 100%;
  max-height: 50vh;
  object-fit: cover;
  box-shadow: 0 0 200px black;
`;

export const InfoWrapper = styled.div`
  display: flex;
  margin: 60px;
  gap: 140px;
`;
export const LeftSide = styled.div`
  flex: 2;
`;
export const RightSide = styled.div`
  flex: 1;
`;

export const Title = styled.div`
  font-size: 45px;
  color: #ffbc9e;
`;
export const Description = styled.div`
  font-size: 20px;
  margin-top: 60px;
`;

export const AdditionalInfo = styled.div`
  font-size: 28px;
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
`;
export const Name = styled.div`
  font-weight: 500;
  color: #ffbc9e;
`;

export const CustomLazyLoading = styled.div`
  wdth: 100%;
  height: 50vh;
  background: black;
`;