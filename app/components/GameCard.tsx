import Link from "next/link";

export default function GameCard({ game, link }: { game: string; link: string; }) {
  return (
    <div className="relative p-8 border-2 border-black rounded-lg group">
      <p className="text-lg font-medium group-hover:underline">{game}</p>
      <Link href={link} className="absolute inset-0" />
    </div>
  );
}