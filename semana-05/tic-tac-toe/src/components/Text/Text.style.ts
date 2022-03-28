import styled from "styled-components";
import { ComponentProps } from "./Text.model";

export const StyledText = styled.h2<ComponentProps>`
  font-size: 1.5em;
  font-weight: bold;
  font-family: Helvetica, sans-serif;
  color: ${(props) =>
    props.type === "warning" ? props.theme.palette.primary : props.theme.palette.secondary};

  @media (max-width: 820px) {
    font-size: 1.2em;
  }
`;
