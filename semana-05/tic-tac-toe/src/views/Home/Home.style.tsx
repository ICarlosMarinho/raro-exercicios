import styled from "styled-components";
import Button from "../../components/Button";

export const Container = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-areas:
    ". logo ."
    ". form .";
  grid-template-rows: 32vw auto;
  grid-template-columns: auto 32vw auto;
  gap: 20px;
  background-color: ${(props) => props.theme.palette.lightGray};

  @media (max-width: 820px) {
    grid-template-areas:
      "logo"
      "form";
    grid-template-rows: 90vw auto;
    grid-template-columns: 90vw;
    justify-content: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  grid-area: form;
  gap: 20px;
`;

export const Logo = styled.img`
  width: 75%;
  height: auto;
  transform: rotate(-45deg);
  grid-area: logo;
  align-self: center;
  justify-self: center;
`;

export const SubmitButton = styled(Button)`
  margin-left: auto;
`;

export const FormFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
