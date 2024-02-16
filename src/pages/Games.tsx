import GameCard from "../components/GameCard";
import img from "../assets/image/game.jpg";
import { FaPlaystation } from "react-icons/fa";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import Game from "../types/Game";

const Games = () => {

  const {games} = useContext(AppContext)

  return (
    <section className="flex flex-col font-Poppins gap-y-5 ">
      <div className="flex flex-col gap-y-2">
        <p className="text-6xl font-bold">New and trending</p>
        <span className="">Based on player counts and release date</span>
      </div>
      
      <div className="grid grid-cols-3 gap-x-5 ">
      {
        games.map((game:Game)=>(
          <GameCard
          key={game.id}
            icon={FaPlaystation}
            icon2={FaPlaystation}
            gameSrc={game.background_image || img}
            gameAlt={game.name}
            gameName={game.name}
            releaseDate={game.released}
            genres={game.genres.map((genre)=>genre.name)}
            chart=" #1 Top 2024"
          />
          ))
        }
        </div>

     
    </section>
  );
};

export default Games;
