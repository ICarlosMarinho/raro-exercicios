import { FC, MouseEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { GameContext } from "../../state/GameContext";
import { GameState } from "../../state/GameContext/GameContext.model";
import Text from "../Text";
import Button from "../Button";
import { Container } from "./Result.style";

const Result: FC = () => {
  const { winner, tied, currentPlayer } = useContext(GameContext) as GameState;
  const navigate = useNavigate();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    navigate({ pathname: "/" });
  };

  const renderContent = () => {
    if (!!winner || tied) {
      return (
        <>
          <Text type="info">{!!winner ? `${winner?.nickName} venceu o jogo!` : "O jogo empatou!"}</Text>
          <Button width="100px" onClick={handleClick}>
            Voltar
          </Button>
        </>
      );
    }

    return <Text type="info">Vez de {currentPlayer.nickName}</Text>;
  };

  return <Container>{renderContent()}</Container>;
};

export default Result;
