const Navbar = () => {
  return (
    <header className="p-5  font-Poppins">
      <nav className="flex flex-row justify-between items-center">
        <h1 className="text-3xl font-bold ">RAWG</h1>
        <input
          type="search"
          name=""
          id=""
          className="w-[80%] mx-auto p-2 outline-none rounded-full bg-[#3B3B3B] placeholder:text-gray-200"
          placeholder="Search..."
        />
      </nav>
    </header>
  );
};

export default Navbar;
