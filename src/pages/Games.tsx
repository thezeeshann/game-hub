import ErrorMessage from "../components/ErrorMessage";
import GameCard from "../components/GameCard";
import Spinner from "../components/Spinner";
import { useGamesContext } from "../lib/hooks";

const Games = () => {
  const { games, isLoading, errorMessage } = useGamesContext();

  return (
    <section className="flex flex-col font-Poppins gap-y-5">
      <div className="flex flex-col gap-y-2">
        <p className="text-6xl font-bold">New and trending</p>
        <span className="">Based on player counts and release date</span>
      </div>

      {isLoading === true ? (
        <Spinner />
      ) : (
        <>
          {errorMessage ? (
            <ErrorMessage message={errorMessage} />
          ) : (
            <div className="grid grid-cols-3 gap-x-5 ">
              {games.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Games;
