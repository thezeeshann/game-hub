import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
// import {
//   FaWindows,
//   FaPlaystation,
//   FaXbox,
//   FaApple,
//   FaLinux,
//   FaAndroid,
// } from "react-icons/fa";
// import { SiNintendo } from "react-icons/si";
// import { MdPhoneIphone } from "react-icons/md";
// import { BsGlobe } from "react-icons/bs";

interface GameCardProps {
  gameSrc: string;
  gameAlt: string;
  gameName: string;
  releaseDate: string;
  genres: string[];
  chart: string;
  added: string;
  metacritic: string;
  gameId: number;
}

const GameCard: React.FC<GameCardProps> = ({
  gameSrc,
  gameAlt,
  gameName,
  releaseDate,
  genres,
  chart,
  added,
  metacritic,
  gameId
}) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen((value) => !value);
  };
  const toggle2 = () => {
    setOpen(false);
  };

  // const getPlatformIcon = (platformName: string) => {
  //   switch (platformName) {
  //     case "PC":
  //       return <FaWindows size={"1.5rem"} className="text-[#859696]" />;
  //     case "PlayStation":
  //       return <FaPlaystation size={"1.5rem"} className="text-[#859696]" />;
  //     case "xbox":
  //       return <FaXbox size={"1.5rem"} className="text-[#859696]" />;
  //     case "nintendo":
  //       return <SiNintendo size={"1.5rem"} className="text-[#859696]" />;
  //     case "mac":
  //       return <FaApple size={"1.5rem"} className="text-[#859696]" />;
  //     case "linux":
  //       return <FaLinux size={"1.5rem"} className="text-[#859696]" />;
  //     case "android":
  //       return <FaAndroid size={"1.5rem"} className="text-[#859696]" />;
  //     case "ios":
  //       return <MdPhoneIphone size={"1.5rem"} className="text-[#859696]" />;
  //     case "web":
  //       return <BsGlobe size={"1.5rem"} className="text-[#859696]" />;
  //   }
  // };

  return (
    <div className="w-auto mt-5 transition ease-in-out delay-200 hover:scale-105">
      <img src={gameSrc} alt={gameAlt} className=" rounded-t-xl" />
      <div className="bg-[#202020] rounded-b-xl  px-4 py-4 flex flex-col gap-y-2 cursor-pointer">
        <div className="flex flex-row items-center justify-between ">
          <div className="flex flex-row items-center gap-x-2">
            {/* {parent_platforms.map((platfrom:Platform)=>(
              <>{platfrom?.platform?.name}</>
            ))} */}
          </div>
          <div className="border-[1px] px-1.5  border-[#6DC849] rounded-md">
            <span className="text-sm font-bold text-[#6DC849]">
              {metacritic}
            </span>
          </div>
        </div>
        <div
          onMouseEnter={toggle}
          onMouseLeave={toggle2}
          className="flex flex-col mb-2 gap-y-2"
        >
          <Link to={`/games/${gameId}`}>
            <p className="text-lg font-bold hover:text-neutral-400">
              {gameName}
            </p>
          </Link>
          <div className="bg-[#444444] justify-center rounded-md w-max px-2 py-1 flex flex-row items-center gap-x-1 hover:bg-white hover:text-black">
            <div>
              <FaPlus size={"1rem"} />
            </div>{" "}
            <p className="text-xs">{added.toLocaleString()}</p>{" "}
          </div>
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
