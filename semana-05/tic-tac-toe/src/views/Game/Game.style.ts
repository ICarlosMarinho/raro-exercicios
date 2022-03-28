import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-areas:
    ". . ."
    ". table ."
    ". result ."
    ". . .";
  grid-template-rows: 1fr 60vh minmax(40px, auto) 1fr;
  grid-template-columns: auto 60vh auto;
  row-gap: 40px;
  background-color: ${(props) => props.theme.palette.lightGray};
`;
