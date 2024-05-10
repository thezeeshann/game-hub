import { IoIosNotifications } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSearchContext } from "../lib/hooks";

const Navbar = () => {
  const { searchQuery, handleChangeSearchQuery } = useSearchContext();

  return (
    <header className="px-8 py-5 font-Poppins">
      <nav className="flex flex-row items-center justify-between ">
        <Link to="/">
          <h1 className="text-3xl font-bold ">RAWG</h1>
        </Link>
        <div className="w-[80%] mx-auto relative">
          <div className="relative flex items-center">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => handleChangeSearchQuery(e.target.value)}
              className="hover:bg-white hover:text-black py-2 px-10 w-full outline-none rounded-full bg-[#3B3B3B] placeholder:text-neutral-400"
              placeholder="Search games..."
            />
            <span className="absolute ml-2 text-neutral-400">
              <IoSearch size={"1.2rem"} />
            </span>
          </div>
        </div>

        <IoIosNotifications size={"2rem"} />
      </nav>
    </header>
  );
};

export default Navbar;
