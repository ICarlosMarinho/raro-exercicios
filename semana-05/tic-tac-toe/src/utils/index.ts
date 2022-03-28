import { Dispatch, SetStateAction } from "react";
import { v4 as uuid } from "uuid";
import { Player, Table, UUID } from "../state/GameContext/GameContext.model";

export const createTable = (): Table => {
  const cells: null[][] = new Array(3);
  const column: null[] = new Array(3);

  column.fill(null, 0, 3);
  cells.fill([...column], 0, 3);

  return cells;
};

export const createPlayer = (nickName: string): Player => ({ id: uuid(), nickName });

export const alreadyPicked = (table: Table, row: number, column: number): boolean => {
  return !!table[row][column];
};

export const checkColumn = (table: Table, column: number): boolean => {
  if (table[0][column] === null) {
    return false;
  }

  return table[0][column] === table[1][column] && table[1][column] === table[2][column];
};

export const checkRow = (table: Table, row: number): boolean => {
  if (table[row][0] === null) {
    return false;
  }

  return table[row][0] === table[row][1] && table[row][1] === table[row][2];
};

export const checkPrimaryDiagonal = (table: Table): boolean => {
  if (table[0][0] === null) {
    return false;
  }

  return table[0][0] === table[1][1] && table[1][1] === table[2][2];
};

export const checkSecondaryDiagonal = (table: Table): boolean => {
  if (table[2][0] === null) {
    return false;
  }

  return table[2][0] === table[1][1] && table[1][1] === table[0][2];
};

export const hasWinner = (table: Table): boolean => {
  for (let i = 0; i < table.length; i++) {
    if (checkRow(table, i) || checkColumn(table, i)) {
      return true;
    }
  }

  return checkPrimaryDiagonal(table) || checkSecondaryDiagonal(table);
};

export const isFull = (table: Table): boolean => {
  for (const row of table) {
    for (const cell of row) {
      if (cell === null) {
        return false;
      }
    }
  }

  return true;
};

export const isEmpty = (table: Table): boolean => {
  for (const row of table) {
    for (const cell of row) {
      if (cell !== null) return false;
    }
  }

  return true;
};

export const makeAMove = (
  playerId: UUID,
  table: Table,
  setTable: Dispatch<SetStateAction<Table>>,
  pickedRow: number,
  pickedColumn: number
): void => {
  if (alreadyPicked(table, pickedRow, pickedColumn)) return;

  setTable(
    table.map((cells, row) => {
      return cells.map((cell, column) => (pickedRow === row && pickedColumn === column ? playerId : cell));
    })
  );
};
