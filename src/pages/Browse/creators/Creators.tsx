import Spinner from "../../../components/Spinner";
import { useBrowseCreators } from "../../../lib/hooks";
import CreatorsGames from "./CreatorsGames";

const Creators = () => {
  const { isLoading, creators } = useBrowseCreators();

  return (
    <section className="flex flex-col font-Poppins gap-y-5">
      <p className="text-6xl font-bold">Creators</p>

      {isLoading === true ? (
        <Spinner />
      ) : (
        <div className="grid flex-row items-center justify-between grid-cols-3 gap-x-5 gap-y-5">
          <>
            {creators?.map((creator) => (
              <div
                key={creator.id}
                className="relative flex flex-col w-auto h-[400px]  rounded-lg gap-x-5 "
              >
                <img
                  src={creator.image_background}
                  alt={creator.name}
                  className=" rounded-t-md opacity-40 h-[350px]"
                />
                <div className="absolute w-full p-4">
                  <div className="flex flex-col items-center justify-center gap-y-3">
                    <img
                      src={creator.image}
                      className="rounded-full w-[130px] h-[130px]"
                      alt=""
                    />
                    <div>
                      <p className="text-xl font-bold text-center underline">
                        {creator.name}
                      </p>
                      <p className="text-xs">Director, Producer, Programmer</p>
                    </div>
                    <div className="px-8 py-2 text-white cursor-pointer bg-slate-200 bg-opacity-20 hover:bg-white hover:text-black">
                      Follow
                    </div>
                  </div>
                </div>
                <div className="bg-[#202020] rounded-md">
                  <div className="flex flex-col p-4 bg-transparent gap-y-2 h-min">
                    <div className="flex flex-row items-center justify-between">
                      <span className="font-semibold">Known for</span>
                      <span className="text-sm text-neutral-400">
                        {creator.games_count?.toLocaleString()}
                      </span>
                    </div>
                    <hr />
                    <CreatorsGames creator={creator} />
                  </div>
                </div>
              </div>
            ))}
          </>
        </div>
      )}
    </section>
  );
};

export default Creators;
