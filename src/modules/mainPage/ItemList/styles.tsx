import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Loader = styled.div`
  width: 100%;
  margin: 50px;
  text-align: center;
`;

export const InputText = styled.div``;

export const Input = styled(DebounceInput)`
  width: 100%;
  height: 30px;
  font-size: 20px;
  margin: 10px 0 20px;
  border-radius: 10px;
  padding-left: 10px;
`;
