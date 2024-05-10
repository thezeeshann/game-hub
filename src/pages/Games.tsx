import ErrorMessage from "../components/ErrorMessage";
import GameCard from "../components/GameCard";
import Spinner from "../components/Spinner";
import { useGamesContext, useSearchContext } from "../lib/hooks";
import Heading from "../components/H1";

const Games = () => {
  const { games, isLoading, errorMessage } = useGamesContext();
  const { searchQuery } = useSearchContext();

  const filterGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="flex flex-col font-Poppins gap-y-5">
      <div className="flex flex-col gap-y-2">
        <Heading>New and trending</Heading>
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
              {filterGames.map((game) => (
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
