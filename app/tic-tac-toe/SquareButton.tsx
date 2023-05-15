import { Player } from "./GameContext";

export default function SquareButton({ value = null, handleClick }: { value: Player | null; handleClick: () => void; }) {
  return (
    <button className="flex items-center justify-center w-20 h-20 border border-black" onClick={handleClick}>
      {
        value === 1
          ? <svg xmlns="http://www.w3.org/2000/svg" className="text-green-500 w-14 h-14" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" />
          </svg>
          : value === 2
            ? <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500 w-14 h-14" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z" />
            </svg>
            : ''
      }
    </button>
  );
}