import React, { useState } from "react";
import { IconType } from "react-icons";

interface GameCardProps {
  icon: IconType;
  icon2: IconType;
  gameSrc: string;
  gameAlt: string;
  gameName: string;
  releaseDate: string;
  genres: string[];
  chart: string;
}

const GameCard: React.FC<GameCardProps> = ({
  icon: Icon,
  icon2: Icon2,
  gameSrc,
  gameAlt,
  gameName,
  releaseDate,
  genres,
  chart,
}) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen((value) => !value);
  };
  const toggle2 = () => {
    setOpen(false);
  };

  return (
    <div className="w-auto mt-5 transition ease-in-out delay-200 hover:scale-105">
      <img src={gameSrc} alt={gameAlt} className=" rounded-t-xl" />
      <div className="bg-[#202020] rounded-b-xl  px-4 py-4 flex flex-col gap-y-2 cursor-pointer">
        <div className="flex flex-row gap-x-2">
          <Icon size={"1.2rem"} />
          <Icon2 size={"1.2rem"} />
        </div>
        <div
          onMouseEnter={toggle}
          onMouseLeave={toggle2}
          className="mb-2 text-lg font-bold hover:text-neutral-400"
        >
          {gameName}
        </div>

        {open === true ? (
          <div className="flex flex-col gap-y-2">
            <div className="flex flex-row items-center justify-between ">
              <p className="text-xs text-neutral-500">Release Date: </p>
              <span className="text-xs text-neutral-100">{releaseDate}</span>
            </div>
            <hr className="bg-gray-700" />
            <div className="flex flex-row items-center justify-between ">
              <p className="text-xs text-neutral-500">Genres: </p>
              <span className="text-xs underline text-neutral-100">
                {genres}
              </span>
            </div>
            <hr />
            <div className="flex flex-row items-center justify-between ">
              <p className="text-xs text-neutral-500">Chart: </p>
              <span className="text-xs text-neutral-100">{chart}</span>
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
