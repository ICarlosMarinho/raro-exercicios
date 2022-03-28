import styled from "styled-components";
import { StyleProps } from "./Button.model";

export const StyledButton = styled.button<StyleProps>`
  border: none;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "40px"};
  background-color: ${({ theme }) => theme.palette.secondary};
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 3px;

  &:hover:not(:disabled) {
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.primary};
  }
`;
