import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
// import {
//   FaWindows,
//   FaPlaystation,
//   FaXbox,
//   FaApple,
//   FaLinux,
//   FaAndroid,
// } from "react-icons/fa";
// import { MdPhoneIphone } from "react-icons/md";
// import { SiNintendo } from "react-icons/si";
// import { BsGlobe } from "react-icons/bs";

interface GameCardProps {
  gameSrc: string;
  gameAlt: string;
  gameName: string;
  releaseDate: string;
  genres: string[];
  chart: string;
  added: string;
  // platforms: string[];
  // platforms:{ name: string }[];
}

const GameCard: React.FC<GameCardProps> = ({
  gameSrc,
  gameAlt,
  gameName,
  releaseDate,
  genres,
  chart,
  added,
  // platforms,
  // platforms
}) => {

  
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen((value) => !value);
  };
  const toggle2 = () => {
    setOpen(false);
  };

  // const getPlatformIcon = (platformName: string): IconType => {
  //   switch (platformName) {
  //     case "PC":
  //       return FaWindows;
  //     case "PlayStation":
  //       return FaPlaystation;
  //     case "Xbox":
  //       return FaXbox;
  //     case "nintendo":
  //       return SiNintendo;
  //     case "mac":
  //       return FaApple;
  //     case "linux":
  //       return FaLinux;
  //     case "android":
  //       return FaAndroid;
  //     case "ios":
  //       return MdPhoneIphone;
  //     case "web":
  //       return BsGlobe;
  //   }
  // };

  return (
    <div className="w-auto mt-5 transition ease-in-out delay-200 hover:scale-105">
      <img src={gameSrc} alt={gameAlt} className=" rounded-t-xl" />
      <div className="bg-[#202020] rounded-b-xl  px-4 py-4 flex flex-col gap-y-2 cursor-pointer">
        <div className="flex flex-row gap-x-2">
          {/* {
            platforms?.map((platform, index)=>{
              const Icon = getPlatformIcon(platform.name)
              return <Icon key={index} size={"1.2rem"} />
            })
          }
          <p>{platforms.join(" ")}</p> */}
        </div>
        <div
          onMouseEnter={toggle}
          onMouseLeave={toggle2}
          className="flex flex-col mb-2 gap-y-2"
        >
          <p className="text-lg font-bold hover:text-neutral-400">{gameName}</p>
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
