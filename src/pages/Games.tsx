import GameCard from "../components/GameCard";
import img from "../assets/image/game.jpg";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import { Game } from "../types/Game";
import Spinner from "../components/Spinner";

const Games = () => {
  const { games, isLoading } = useContext(AppContext);

  return (
    <section className="flex flex-col font-Poppins gap-y-5">
      <div className="flex flex-col gap-y-2">
        <p className="text-6xl font-bold">New and trending</p>
        <span className="">Based on player counts and release date</span>
      </div>

      {isLoading === true ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-3 gap-x-5 ">
          {games.map((game: Game) => (
            <GameCard
              key={game.id}
              gameId={game.id}
              metacritic={game.metacritic}
              // platforms={game.parent_platforms?.map((platform)=>({name:platform.platform.name}))}
              // parent_platforms={game.parent_platforms.map((platform:Platform)=>{platform?.platform?.name})}
              added={game.added}
              gameSrc={game.background_image || img}
              gameAlt={game.name}
              gameName={game.name}
              releaseDate={game.released}
              genres={game.genres.map((genre) => genre.name)}
              chart=" #1 Top 2024"
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Games;
