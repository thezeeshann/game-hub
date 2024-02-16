import Sidebar from "../components/Sidebar/Sidebar";
import Games from "./Games";

const Home = () => {
  return (
    <section className="flex flex-row w-full min-h-screen mx-auto overflow-x-hidden">
      <div className="w-[20%] font-Poppins h-screen flex">
        <Sidebar/>
      </div>
      <div className="w-[80%] font-Poppins ">
        <Games/>
      </div>
    </section>
  );
};

export default Home;
