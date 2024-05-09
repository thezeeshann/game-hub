import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Games } from "../lib/types";
import PlatformsIconList from "./PlatformsIconList";

type GameCardProps = {
  game: Games;
};

const GameCard = ({ game }: GameCardProps) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen((value) => !value);
  };
  const toggle2 = () => {
    setOpen(false);
  };

  return (
    <div className="w-auto mt-5 transition ease-in-out delay-200 hover:scale-105">
      <img
        src={game.background_image}
        alt={game.name}
        className=" rounded-t-xl"
      />
      <div className="bg-[#202020] rounded-b-xl  px-4 py-4 flex flex-col gap-y-2 cursor-pointer">
        <div className="flex flex-row items-center justify-between ">
          <div className="flex flex-row items-center gap-x-2">
            <PlatformsIconList
              platforms={game.parent_platforms?.map((p) => p.platform)}
            />
          </div>
          <div className="border-[1px] px-1.5  border-[#6DC849] rounded-md">
            <span className="text-sm font-bold text-[#6DC849]">
              {game.metacritic}
            </span>
          </div>
        </div>
        <div
          onMouseEnter={toggle}
          onMouseLeave={toggle2}
          className="flex flex-col mb-2 gap-y-2"
        >
          <Link to={`/games/${game.slug}`}>
            <p className="text-lg font-bold hover:text-neutral-400">
              {game.name}
            </p>
          </Link>
          <div className="bg-[#444444] justify-center rounded-md w-max px-2 py-1 flex flex-row items-center gap-x-1 hover:bg-white hover:text-black">
            <div>
              <FaPlus size={"1rem"} />
            </div>{" "}
            <p className="text-xs">{game.added.toLocaleString()}</p>{" "}
          </div>
        </div>

        {open === true ? (
          <div className="flex flex-col gap-y-2">
            <div className="flex flex-row items-center justify-between ">
              <p className="text-xs text-neutral-500">Release Date: </p>
              <span className="text-xs text-neutral-100">
                {new Date(game.released).toLocaleDateString("en-Us", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
            <hr className="bg-gray-700" />
            <div className="flex items-center justify-between">
              <p className="text-xs text-neutral-500">Genres: </p>
              <div className="flex gap-x-2">
                {game.genres.map((genre) => (
                  <p
                    key={genre.id}
                    className="text-xs underline text-neutral-100"
                  >
                    {genre.name}
                  </p>
                ))}
              </div>
            </div>
            <hr />
            <div className="flex flex-row items-center justify-between ">
              <p className="text-xs text-neutral-500">Chart: </p>
              <span className="text-xs text-neutral-100">
                #1 Top {game.released}
              </span>
            </div>
            <div className="mt-2 rounded-md bg-[#444444] py-2">
              <p className="text-sm text-center">Show more</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default GameCard;
