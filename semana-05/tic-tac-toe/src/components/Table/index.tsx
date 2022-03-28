import { FC, useContext } from "react";
import { GameContext } from "../../state/GameContext";
import { GameState, UUID } from "../../state/GameContext/GameContext.model";
import Cell from "../Cell";
import { Container } from "./Table.style";

const Table: FC = () => {
  const { table, playerOne } = useContext(GameContext) as GameState;

  const getCellContent = (cell: UUID | null) => {
    if (cell === null) return null;
    else {
      return cell === playerOne.id ? "X" : "O";
    }
  };

  const renderCells = () => {
    return table.map((cells, row) =>
      cells.map((cell, column) => (
        <Cell key={`cell-${row}-${column}`} children={getCellContent(cell)} row={row} column={column} />
      ))
    );
  };

  return <Container>{renderCells()}</Container>;
};

export default Table;
