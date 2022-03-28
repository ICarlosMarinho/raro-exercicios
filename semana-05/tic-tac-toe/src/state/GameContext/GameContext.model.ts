import { Dispatch, SetStateAction } from "react";
import { v4 } from "uuid";

export type UUID = ReturnType<typeof v4>;

export type Table = (UUID | null)[][];

export interface Player {
  id: UUID;
  nickName: string;
}

export interface GameState {
  table: Table;
  playerOne: Player;
  playerTwo: Player;
  currentPlayer: Player;
  winner: Player | null;
  tied: boolean;
  setTable: Dispatch<SetStateAction<Table>>;
  setPlayerOne: Dispatch<SetStateAction<Player>>;
  setPlayerTwo: Dispatch<SetStateAction<Player>>;
  setCurrentPlayer: Dispatch<SetStateAction<Player>>;
  setWinner: Dispatch<SetStateAction<Player | null>>;
  setTied: Dispatch<SetStateAction<boolean>>;
}
