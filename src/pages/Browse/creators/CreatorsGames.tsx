
import { IoPersonSharp } from "react-icons/io5";
import { BrowseCreators } from "../../../lib/browse-types";

type CreatorGameProp = {
  creator: BrowseCreators;
};

const CreatorsGames = ({ creator }: CreatorGameProp) => {
  const displayedGames = creator.games.slice(0, 3);

  return (
    <div className="flex flex-col gap-y-1">
      {displayedGames.map((game) => (
        <div key={game.id} className="flex flex-row justify-between">
          <p className="text-sm underline">{game.name}</p>
          <div className="flex flex-row items-center justify-between gap-x-1">
            <span className="text-sm text-neutral-400">
              {game.added?.toLocaleString()}{" "}
            </span>{" "}
            <span>
              <IoPersonSharp color="#656565" size={12} />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CreatorsGames;
