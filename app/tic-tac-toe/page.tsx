import Title from "../components/Title";
import Board from "./Board";
import TicTacToeContext from "./GameContext";

export const metadata = {
  title: 'Tic Tac Toe',
};

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center sm:justify-start">
      <Title title="Tic Tac Toe" />

      <div className="mt-8">
        <TicTacToeContext>
          <Board />
        </TicTacToeContext>
      </div>

    </main>
  );
}