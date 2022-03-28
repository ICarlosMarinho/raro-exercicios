import { FC, useContext, useEffect } from "react";
import { Container } from "./Game.style";
import { GameContext } from "../../state/GameContext";
import { GameState } from "../../state/GameContext/GameContext.model";
import { createTable, isFull, isEmpty, hasWinner } from "../../utils";
import Table from "../../components/Table";
import Result from "../../components/Result";

const GameView: FC = () => {
  const { table, currentPlayer, playerOne, playerTwo, setWinner, setCurrentPlayer, setTied, setTable } =
    useContext(GameContext) as GameState;

  useEffect(() => {
    if (!isEmpty(table)) {
      if (hasWinner(table)) {
        setWinner({ ...currentPlayer });
      } else if (isFull(table)) {
        setTied(true);
      } else {
        setCurrentPlayer(playerOne.id === currentPlayer.id ? { ...playerTwo } : { ...playerOne });
      }
    }
  }, [table]);

  useEffect(() => {
    return resetGame;
  }, []);

  const resetGame = () => {
    setTable(createTable());
    setTied(false);
    setWinner(null);
  };

  return (
    <Container>
      <Table />
      <Result />
    </Container>
  );
};

export default GameView;
