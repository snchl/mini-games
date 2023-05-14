import GameCard from "./GameCard";

export default function GamesList() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <GameCard game="Tic Tac Toe" link="/tic-tac-toe" />
    </div>
  );
}