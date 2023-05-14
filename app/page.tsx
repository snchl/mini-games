import GamesList from "./components/GamesList";
import Title from "./components/Title";

export const metadata = {
  title: 'Mini Games',
};

export default function Page() {
  return (
    <main>
      <Title title="Home" />

      <div className="mt-8">
        <GamesList />
      </div>
    </main>
  );
}
