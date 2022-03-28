import { FC, useContext } from "react";
import { GameContext } from "../../state/GameContext";
import { GameState } from "../../state/GameContext/GameContext.model";
import { makeAMove } from "../../utils";
import { CellProps } from "./Cell.model";
import { Container } from "./Cell.style";

const Cell: FC<CellProps> = ({ children, row, column }) => {
  const { currentPlayer, table, setTable, tied, winner } = useContext(GameContext) as GameState;

  const handleClick = () => {
    if (!tied && !winner) {
      makeAMove(currentPlayer.id, table, setTable, row, column);
    }
  };

  return (
    <Container onClick={handleClick} row={row} column={column}>
      {children}
    </Container>
  );
};

export default Cell;
