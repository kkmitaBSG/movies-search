import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";
import { BiSearchAlt as BiSearchAltBase } from "react-icons/bi";

export const InputWrapper = styled.div`
  display: flex;
  background-color: #3c3c3c;
  align-items: center;
  padding: 0 30px;
  border-radius: 20px;
  gap: 8px;
`;

export const Input = styled(DebounceInput)`
  width: 100%;
  height: 50px;
  font-size: 20px;
  background: none;
  border: none;
  color: #fff;
  padding-left: 16px;
  outline: none;
`;

export const BiSearchAlt = styled(BiSearchAltBase)`
  width: 26px;
  height: 26px;
`;
