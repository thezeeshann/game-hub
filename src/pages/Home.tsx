import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <section className="flex flex-row w-full min-h-screen mx-auto">
      <div className="w-[20%] font-Poppins flex sticky top-0 bottom-0 h-full">
        <Sidebar/>
      </div>
      <div className="w-[80%] font-Poppins">
        <Outlet/>
      </div>
    </section>
  );
};

export default Home;
