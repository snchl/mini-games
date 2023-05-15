'use client';

import Game from "./Game";
import PlayerTag from "./PlayerTag";

export default function Board() {
  return (
    <div className="flex flex-col items-center gap-y-4">

      <Game />

      <div className="flex flex-wrap items-center justify-center gap-4 border">
        <PlayerTag player={1} />
        <PlayerTag player={2} />
      </div>
    </div>
  );
}