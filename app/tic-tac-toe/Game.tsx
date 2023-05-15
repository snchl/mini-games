import { useContext, useState } from "react";
import SquareButton from "./SquareButton";
import { GameValues, GameValuesContext, PlayerContext, WinnerContext, initialCurrentPlayer, initialGameValues, initialWinner } from "./GameContext";

export default function Game() {
  const { currentPlayer, setCurrentPlayer } = useContext(PlayerContext);
  const { gameValues, setGameValues } = useContext(GameValuesContext);
  const { winner, setWinner } = useContext(WinnerContext);

  const [endGame, setEndGame] = useState(false);

  function togglePlayerTurn() {
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  }

  function checkWinner(newGameValues: GameValues) {
    const winningCombinations = [
      // Horizontal
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      // Vertical
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      // Diagonal
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;

      if (newGameValues[a] && newGameValues[a] === newGameValues[b] && newGameValues[a] === newGameValues[c]) {
        return true;
      }
    }

    return false;
  }

  function onTurnPlayed(index: number) {
    if (!winner && gameValues[index] === null) {
      const newGameValues = [...gameValues];
      newGameValues[index] = currentPlayer;

      setGameValues(newGameValues);

      if (checkWinner(newGameValues)) {
        setWinner(currentPlayer);
      } else if (!newGameValues.includes(null)) {
        setEndGame(true);
      } else {
        togglePlayerTurn();
      }
    }
  }

  function restartGame() {
    setCurrentPlayer(initialCurrentPlayer);
    setGameValues(initialGameValues);
    setWinner(initialWinner);
    setEndGame(false);
  }

  return (
    <div className="relative flex flex-col border border-black w-max">
      <div className="flex">
        <SquareButton value={gameValues[0]} handleClick={() => onTurnPlayed(0)} />
        <SquareButton value={gameValues[1]} handleClick={() => onTurnPlayed(1)} />
        <SquareButton value={gameValues[2]} handleClick={() => onTurnPlayed(2)} />
      </div>
      <div className="flex">
        <SquareButton value={gameValues[3]} handleClick={() => onTurnPlayed(3)} />
        <SquareButton value={gameValues[4]} handleClick={() => onTurnPlayed(4)} />
        <SquareButton value={gameValues[5]} handleClick={() => onTurnPlayed(5)} />
      </div>
      <div className="flex">
        <SquareButton value={gameValues[6]} handleClick={() => onTurnPlayed(6)} />
        <SquareButton value={gameValues[7]} handleClick={() => onTurnPlayed(7)} />
        <SquareButton value={gameValues[8]} handleClick={() => onTurnPlayed(8)} />
      </div>
      {
        winner && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-10">
            <div className="px-4 py-2 text-center bg-white rounded-lg">
              <p>Player {winner} won !</p>
              <button className="font-semibold hover:text-red-500" onClick={restartGame}>Restart</button>
            </div>
          </div>
        )
      }
      {
        endGame && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-10">
            <div className="px-4 py-2 text-center bg-white rounded-lg">
              <p>Sorry, no winners...</p>
              <button className="font-semibold hover:text-red-500" onClick={restartGame}>Restart</button>
            </div>
          </div>
        )
      }
    </div>
  );
}