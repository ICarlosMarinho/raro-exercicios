import styled, { ThemeProps } from "styled-components";
import { StyleProps } from "./Input.model";

export const Container = styled.fieldset<StyleProps>`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "40px")};
  position: relative;
`;

export const StyledLabel = styled.label<{ inputFocus: boolean }>`
  font-family: Helvetica, sans-serif;
  font-weight: 600;
  color: ${(props) => {
    return props.inputFocus ? props.theme.palette.primary : props.theme.palette.secondary;
  }};
  background-color: ${(props) => props.theme.palette.lightGray};
  position: absolute;
  padding: 0 2px;
  top: -8px;
  left: 20px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: inherit;
  border-radius: 5px;
  border: 3px solid ${(props) => props.theme.palette.secondary};
  padding: 0 10px;
  font-size: 1em;
  box-sizing: border-box;
  background-color: transparent;
`;
