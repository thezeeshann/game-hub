import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="px-8 py-5 font-Poppins">
      <nav className="flex flex-row items-center justify-between ">
        <Link to="/" >
          <h1 className="text-3xl font-bold ">RAWG</h1>
        </Link>
        <input
          type="search"
          name=""
          id=""
          className="w-[80%] mx-auto p-2 outline-none rounded-full bg-[#3B3B3B] placeholder:text-gray-200"
          placeholder="Search..."
        />
        <IoIosNotifications size={"2rem"} />
      </nav>
    </header>
  );
};

export default Navbar;
