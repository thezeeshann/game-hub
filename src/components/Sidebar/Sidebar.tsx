import { FaStar } from "react-icons/fa6";
import { ImFire } from "react-icons/im";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoChatbubble } from "react-icons/io5";
import { FaTrophy } from "react-icons/fa";
import { MdCollectionsBookmark } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaCrown } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa6";
import SidebarItems from "./SidebarItems";
import { IoPersonSharp } from "react-icons/io5";
import { FaWindows } from "react-icons/fa";
import { useState } from "react";
import { FaXbox } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { IoLogoAndroid } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";
import { ImEvil2 } from "react-icons/im";
import { FaFolderOpen } from "react-icons/fa";
import Genres from "./Genres";
import actionImg from "../../assets/image/action.png";
import StrategyImg from "../../assets/image/strategy.png";
import rpgImg from "../../assets/image/rpg.png";
import shooterImg from "../../assets/image/shooting.png";
import advantureImg from "../../assets/image/adventure.png";
import puzzleImg from "../../assets/image/puzzle.png";
import racingImg from "../../assets/image/racing.png";
import sportImg from "../../assets/image/sports.png";
import ShowAndHide from "./ShowAndHide";

const Sidebar = () => {
  const [browse, setBrowse] = useState(false);
  const [platforms, setPlatforms] = useState(false);
  const [genres, setGenres] = useState(false);

  const toggleBrows = () => {
    setBrowse((Value) => !Value);
  };

  const togglePlatfom = () => {
    setPlatforms((value) => !value);
  };

  const toggleGenres = () => {
    setGenres((value) => !value);
  };

  return (
    <aside className="py-8 px-8 flex flex-col font-Poppins gap-y-5">
      <p className=" text-2xl font-bold">Home</p>
      <p className=" text-2xl font-bold">Reviewa</p>

      <div className="flex flex-col gap-y-2 cursor-pointer">
        <p className="text-2xl font-bold ">New Releases</p>
        <SidebarItems label="Last 30 days" icon={FaStar} />
        <SidebarItems label="This week" icon={ImFire} />
        <SidebarItems label="Next week" icon={TbPlayerTrackNextFilled} />
        <SidebarItems label="Release calender" icon={FaCalendarAlt} />
      </div>

      <div className="flex flex-col gap-y-2 cursor-pointer">
        <p className="text-2xl font-bold ">Top</p>
        <SidebarItems label="Best of the year" icon={FaTrophy} />
        <SidebarItems label="Popular in 2023" icon={IoStatsChartSharp} />
        <SidebarItems label="All time top" icon={FaCrown} />
      </div>
      <p className=" text-2xl font-bold">All Games</p>

      <div className="flex flex-col gap-y-2 cursor-pointer">
        <p className="text-2xl font-bold ">Browse</p>
        <SidebarItems label="Platforms" icon={IoGameController} />
        <SidebarItems label="Stores" icon={IoMdDownload} />
        <SidebarItems label="Collections" icon={FaFolderOpen} />

        {browse && (
          <>
            <SidebarItems label="Reviews" icon={IoChatbubble} />
            <SidebarItems label="Genres" icon={ImEvil2} />
            <SidebarItems label="Creators" icon={IoPersonSharp} />
            <SidebarItems label="Tags" icon={FaHashtag} />
            <SidebarItems label="Developers" icon={FaCode} />
            <SidebarItems label="Publisher" icon={MdCollectionsBookmark} />
          </>
        )}

        <span onClick={toggleBrows}>
          <ShowAndHide
            label={`${browse === true ? "Hide" : "Show All "} `}
            icon={browse === true ? FaChevronUp : FaChevronDown}
          />
        </span>
      </div>

      <div className="flex flex-col gap-y-2 cursor-pointer">
        <p className="text-2xl font-bold">Platforms</p>
        <SidebarItems label="PC" icon={FaWindows} />
        <SidebarItems label="PlayStation 4" icon={FaPlaystation} />
        <SidebarItems label="Xbox One" icon={FaXbox} />

        {platforms && (
          <>
            <SidebarItems label="Nintendo Switch" icon={BsNintendoSwitch} />
            <SidebarItems label="ios" icon={FaAppStoreIos} />
            <SidebarItems label="Android" icon={IoLogoAndroid} />
          </>
        )}

        <span onClick={togglePlatfom}>
          <ShowAndHide
            label={`${platforms === true ? "Hide" : "Show All "} `}
            icon={platforms === true ? FaChevronUp : FaChevronDown}
          />
        </span>
      </div>

      <div className="flex flex-col  cursor-pointer">
        <p className="text-2xl font-bold">Genres</p>
        <Genres label="Actions" src={actionImg} alt="action image" />
        <Genres label="Strategy" src={StrategyImg} alt="Strategy image" />
        <Genres label="RPG" src={rpgImg} alt="RPG image" />

        {genres && (
          <>
            <Genres label="Shooter" src={shooterImg} alt="Shooter image" />
            <Genres
              label="Advanture"
              src={advantureImg}
              alt="Advanture image"
            />
            <Genres label="Puzzle" src={puzzleImg} alt="Puzzle image" />
            <Genres label="Racing" src={racingImg} alt="Racing image" />
            <Genres label="Sports" src={sportImg} alt="Sports image" />
          </>
        )}

        <span onClick={toggleGenres}>
          <ShowAndHide
            label={`${genres === true ? "Hide" : "Show All "} `}
            icon={genres === true ? FaChevronUp : FaChevronDown}
          />
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
