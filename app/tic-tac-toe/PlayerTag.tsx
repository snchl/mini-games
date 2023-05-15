'use client';

import { useContext } from "react";
import { Player, PlayerContext, PlayerContextType } from "./GameContext";

export default function PlayerTag({ player }: { player: Player; }) {
  const playerContext = useContext(PlayerContext);
  const { currentPlayer } = playerContext;

  return (
    <p className={`px-8 py-2 text-lg font-medium rounded-xl ${player === currentPlayer ? 'bg-blue-400' : 'bg-gray-400'}`}>Player {player}</p>
  );
}