import styled from "styled-components";

export const Container = styled.article`
  grid-area: table;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 60vh;
  height: 60vh;
  background-color: #000;
`;
