import { createContext, FC, useState } from "react";
import { createPlayer, createTable } from "../../utils";
import { GameState } from "./GameContext.model";

export const GameContext = createContext<GameState | {}>({});

const GameContextProvider: FC = ({ children }) => {
  const [table, setTable] = useState(createTable());
  const [playerOne, setPlayerOne] = useState(createPlayer("Player 1"));
  const [playerTwo, setPlayerTwo] = useState(createPlayer("Player 2"));
  const [currentPlayer, setCurrentPlayer] = useState({ ...playerOne });
  const [winner, setWinner] = useState(null);
  const [tied, setTied] = useState(null);

  return (
    <GameContext.Provider
      value={{
        table,
        playerOne,
        playerTwo,
        currentPlayer,
        winner,
        tied,
        setTable,
        setPlayerOne,
        setPlayerTwo,
        setCurrentPlayer,
        setWinner,
        setTied
      }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
