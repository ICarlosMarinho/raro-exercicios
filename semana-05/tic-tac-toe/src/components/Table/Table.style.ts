import styled from "styled-components";

export const Container = styled.article`
  grid-area: table;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  height: 100%;
  background-color: #000;

  @media (max-width: 340px) {
    gap: 5px;
  }
`;
