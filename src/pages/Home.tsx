import Sidebar from "../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <section className="flex flex-row mx-auto w-full overflow-x-hidden min-h-screen">
      <div className="w-[20%] font-Poppins">
        <Sidebar/>
      </div>
      <div className="w-[80%] "></div>
    </section>
  );
};

export default Home;
