import styled from "styled-components";
import { CellProps } from "./Cell.model";

export const Container = styled.section<CellProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4em;
  font-weight: bolder;
  font-family: Helvetica, sans-serif;
  grid-area: ${(props) => `${props.row + 1} / ${props.column + 1}`};
  background-color: ${(props) => props.theme.palette.lightGray};
`;
