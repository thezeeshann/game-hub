import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import Spinner from "../../../components/Spinner";
import { BrowseGenres } from "../../../types/Browse/Genres";
import GenresGame from "./GenresGame";

const Genres = () => {
  const { genres, isLoading } = useContext(AppContext);

  return (
    <section className="flex flex-col font-Poppins gap-y-5">
      <p className="text-6xl font-bold">Genres</p>

      {isLoading === true ? (
        <Spinner />
      ) : (
        <div className="grid flex-row items-center justify-between grid-cols-3 gap-x-5">
          <>
            {genres.map((genres: BrowseGenres) => (
              <div
                key={genres.id}
                className="relative flex flex-col w-auto h-[280px]  rounded-lg gap-x-5"
              >
                <img
                  src={genres.image_background}
                  alt={genres.name}
                  className="rounded-md opacity-40 h-[250px]"
                />
                <div className="absolute w-full p-4">
                  <div className="flex flex-col items-center justify-center gap-y-3">
                    <p className="text-lg font-bold text-center underline">
                      {genres.name}
                    </p>
                    <div className="px-8 py-2 text-white cursor-pointer bg-slate-200 bg-opacity-20 hover:bg-white hover:text-black">
                      Follow
                    </div>
                  </div>
                  <div className="flex flex-col mt-5 bg-transparent gap-y-2 h-min">
                    <div className="flex flex-row items-center justify-between">
                      <span className="font-semibold">Popular items</span>
                      <span className="text-sm text-neutral-400">
                        {genres.games_count?.toLocaleString()}
                      </span>
                    </div>
                    <hr />
                    <GenresGame genres={genres} />
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

export default Genres;
