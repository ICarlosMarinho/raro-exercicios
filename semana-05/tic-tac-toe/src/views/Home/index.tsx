import { ChangeEvent, MouseEvent, Dispatch, FC, SetStateAction, useContext } from "react";
import { useNavigate } from "react-router-dom";

import logoSrc from "../../../public/tic-tac-toe.png";
import Input from "../../components/Input";
import Text from "../../components/Text";
import { GameContext } from "../../state/GameContext";
import { GameState, Player } from "../../state/GameContext/GameContext.model";
import { Container, Form, Logo, FormFooter, SubmitButton } from "./Home.style";

const HomeView: FC = () => {
  const { playerOne, playerTwo, setPlayerOne, setPlayerTwo, setCurrentPlayer } = useContext(
    GameContext
  ) as GameState;
  const navigate = useNavigate();

  const getHandleChange = (setValue: Dispatch<SetStateAction<Player>>, currentValue: Player) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      setValue({ ...currentValue, nickName: event.target.value });
    };
  };

  const handleSubmit = (event: MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    setCurrentPlayer({ ...playerOne });
    navigate({ pathname: "/game" });
  };

  const nickNamesEquals = () => {
    if (!playerOne.nickName && !playerTwo.nickName) return false;

    return playerOne.nickName === playerTwo.nickName;
  };

  const renderWarning = (textContent: string, condition: boolean) => {
    return condition ? <Text type="warning">{textContent}</Text> : null;
  };

  return (
    <Container>
      <Logo src={logoSrc} alt="Tic Tac Toe" />
      <Form onSubmit={handleSubmit}>
        <Input
          autoFocus
          id="player-one"
          label="Player One"
          placeholder="Ex. Yoda"
          minLength={3}
          maxLength={10}
          required
          value={playerOne.nickName}
          onChange={getHandleChange(setPlayerOne, playerOne)}
        />
        <Input
          id="player-two"
          label="Player Two"
          placeholder="Ex. Jabba"
          minLength={3}
          maxLength={10}
          required
          value={playerTwo.nickName}
          onChange={getHandleChange(setPlayerTwo, playerTwo)}
        />
        <FormFooter>
          {renderWarning("Escolha nomes diferentes!", nickNamesEquals())}
          <SubmitButton type="submit" width="100px" disabled={nickNamesEquals()}>
            Iniciar
          </SubmitButton>
        </FormFooter>
      </Form>
    </Container>
  );
};

export default HomeView;
