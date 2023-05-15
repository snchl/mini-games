'use client';

import { type Dispatch, type SetStateAction, createContext, useState } from "react";

/**
 * Player Context
 */
export type Player = 1 | 2;
export type PlayerContextType = {
  currentPlayer: Player;
  setCurrentPlayer: Dispatch<SetStateAction<Player>>;
};

export const initialCurrentPlayer = 1;
export const PlayerContext = createContext<PlayerContextType>({
  currentPlayer: initialCurrentPlayer,
  setCurrentPlayer: () => { }
});

/**
 * Winner Context
 */
export type Winner = Player | null;
export type WinnerContextType = {
  winner: Winner | null;
  setWinner: Dispatch<SetStateAction<Winner>>;
};

export const initialWinner = null;
export const WinnerContext = createContext<WinnerContextType>({
  winner: initialWinner,
  setWinner: () => { }
});

/**
 * Game values Context
 */
export type GameValues = Array<Player | null>;
export type GameValuesContextType = {
  gameValues: GameValues;
  setGameValues: Dispatch<SetStateAction<GameValues>>;
};

export const initialGameValues = Array(9).fill(null);
export const GameValuesContext = createContext<GameValuesContextType>({
  gameValues: initialGameValues,
  setGameValues: () => { }
});

export default function TicTacToeContext({ children }: { children: React.ReactNode; }) {
  const [currentPlayer, setCurrentPlayer] = useState<Player>(1);
  const [winner, setWinner] = useState<Winner>(null);
  const [gameValues, setGameValues] = useState<GameValues>(Array(9).fill(null));

  return (
    <PlayerContext.Provider value={{
      currentPlayer,
      setCurrentPlayer
    }}>
      <WinnerContext.Provider value={{
        winner,
        setWinner
      }}>
        <GameValuesContext.Provider value={{
          gameValues,
          setGameValues
        }}>
          {children}
        </GameValuesContext.Provider>
      </WinnerContext.Provider>
    </PlayerContext.Provider >
  );
}