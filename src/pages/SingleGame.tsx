import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa6";
import { IoFolderOpenOutline } from "react-icons/io5";
import { CiGift } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useSingleGames, useSingleGamesImages } from "../lib/hooks";
import { GoDotFill } from "react-icons/go";
import PlatformsIconList from "../components/PlatformsIconList";

const SingleGame = () => {
  const { gameSlug } = useParams();
  const { singleGame, isLoading } = useSingleGames(gameSlug);
  const { displayedImages } = useSingleGamesImages(gameSlug);
  const [showMore, setShowMore] = useState(false);
  const [showMoreTwo, setShowMoreTwo] = useState(false);

  if (!singleGame) {
    return null;
  }

  return isLoading === true ? (
    <Spinner />
  ) : (
    <section className="flex flex-col font-Poppins">
      <img
        src={singleGame?.background_image}
        alt=""
        className="bg-center bg-no-repeat bg-auto rounded-md opacity-25"
      />

      <div className="absolute flex flex-row px-10 py-10 gap-y-5">
        {/* right  */}
        <div className="flex flex-col gap-y-5 w-[60%]">
          <div className="flex flex-row items-center gap-x-5">
            <span className="px-1 text-sm text-black bg-white rounded-md">
              {new Date(singleGame?.released).toLocaleDateString("en-Us", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
            <div className="flex flex-row gap-x-2">
              <PlatformsIconList
                platforms={singleGame?.parent_platforms.map((p) => p.platform)}
              />
            </div>
            <span className="text-sm uppercase text-neutral-200">
              AveRAGE PLAYTIME: {singleGame?.playtime} HOURS
            </span>
          </div>
          <div className="flex flex-col gap-y-5">
            <p className="font-bold text-7xl">{singleGame?.name}</p>
            <div className="flex flex-row gap-x-5">
              <div className="flex flex-col justify-center items-center px-4 py-1 bg-[#FFFFFF] rounded-md">
                <p className="text-xs text-black">
                  Add To <br />{" "}
                </p>
                <span className="flex flex-row text-sm text-[#000000]">
                  My Games
                </span>
              </div>

              <div className="px-4 py-1 border rounded-md">
                <p className="text-xs text-[#696969]">
                  Add To <br />{" "}
                  <div className="flex flex-row items-center gap-x-2">
                    <span className="flex flex-row text-sm text-white">
                      Wishlist
                    </span>
                    <span className="text-white">
                      <CiGift size={"1.5rem"} />
                    </span>
                  </div>
                </p>
              </div>

              <div className="py-1 ">
                <p className="text-xs text-[#696969]">
                  Add To <br />{" "}
                  <div className="flex flex-row items-center gap-x-2">
                    <span className="flex flex-row text-sm text-white">
                      Collection
                    </span>
                    <span className="text-white">
                      <IoFolderOpenOutline size={"1.5rem"} />
                    </span>
                  </div>
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-x-5">
              <div className="flex flex-col gap-y-2">
                <p className="text-xl font-semibold"> Exceptional 🔥</p>
                <span className="text-sm text-gray-400 underline cursor-pointer hover:text-gray-100">
                  {" "}
                  {singleGame?.ratings_count} RATINGS
                </span>
              </div>
              <div className="flex flex-col">
                <p className="text-xl font-semibold"># 1</p>
                {singleGame?.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="text-sm text-gray-400 underline cursor-pointer hover:text-gray-100"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
              <div>
                <p className="text-xl font-semibold"># 1</p>
                <span className="text-sm text-gray-400 underline cursor-pointer hover:text-gray-100">
                  TOP {/* {singleGame?.released} */}
                  {new Date(singleGame?.released).toLocaleDateString("en-Us", {
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-row flex-wrap gap-x-3 gap-y-3">
            {singleGame?.ratings.map((rating) => (
              <div
                key={rating.id}
                className="flex flex-row items-center gap-x-1 justify-between px-2 py-1 border-2 border-[#737373] rounded-full"
              >
                <GoDotFill
                  className={`$${
                    rating.title === "exceptional"
                      ? "text-[#71B835]"
                      : "text-[#71B835]"
                  } ${rating.title === "recommended" ? "text-[#5377DC]" : ""} 
                    ${rating.title === "meh" ? "text-[#F8A23E]" : ""}      
                    ${rating.title === "skip" ? "text-[#F83947]" : ""} 
                  `}
                  size={"1.2rem"}
                />
                <p className="font-semibold">{rating.title} </p>
                <span className="text-[#737373]">{rating.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* left */}
        <div className="w-[40%]">
          {displayedImages.map((image) => (
            <div key={image.id} className="flex flex-row justify-end py-2">
              <img
                src={image.image}
                alt=""
                className="rounded-md w-auto h-[110px] "
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row w-full mb-5 gap-x-5">
        <div className="flex flex-col mt-5 gap-y-8 w-[50%] ">
          <div className="flex flex-row items-center gap-x-5">
            <button className="bg-[#2D2D2D] py-3 px-5 rounded flex flex-row items-center gap-x-2 ">
              <span>
                <FaPlus size={"1.5rem"} className="text-[#969696] " />
              </span>{" "}
              <span className="text-[#969696]">Write a review</span>
            </button>
            <button className="bg-[#2D2D2D] py-3 px-5 rounded flex flex-row items-center gap-x-2  ">
              <span>
                <FaRegComment size={"1.5rem"} className="text-[#969696]" />
              </span>{" "}
              <span className="text-[#969696] ">Write a comment</span>
            </button>
          </div>
          <div>
            <p className="text-2xl font-bold">About</p>
            {showMore === true ? (
              <p className="text-sm">
                {singleGame?.description_raw}{" "}
                <span
                  onClick={() => setShowMore(false)}
                  className="px-1 text-xs text-black bg-white rounded-md cursor-pointer"
                >
                  Show less
                </span>
              </p>
            ) : (
              <p className="text-sm">
                {singleGame?.description_raw.substring(0, 600)}....{" "}
                <span
                  onClick={() => setShowMore(true)}
                  className="px-1 text-xs text-black bg-white rounded-md cursor-pointer"
                >
                  Read more
                </span>
              </p>
            )}
          </div>
          <div className="flex flex-row gap-x-5">
            <div className="flex flex-col gap-y-5">
              <div>
                <span className="text-[#414444] font-semibold"> Metascore</span>
                <div className="w-min border-[1px] px-1.5  border-[#6DC849] rounded-md">
                  <span className="text-sm font-bold text-[#6DC849]">
                    {singleGame?.metacritic}
                  </span>
                </div>
              </div>
              <div>
                <span className="text-[#414444] font-semibold"> Platforms</span>

                {singleGame?.metacritic_platforms.map((metacriticPlatform) => (
                  <p
                    key={metacriticPlatform.platform.platform}
                    className="text-base text-gray-200 underline"
                  >
                    {metacriticPlatform.platform.name}
                  </p>
                ))}
              </div>
              <div>
                <span className="text-[#414444] font-semibold">
                  {" "}
                  Release date
                </span>
                <p className="text-base text-gray-200 underline">
                  {new Date(singleGame?.released).toLocaleDateString("en-Us", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div>
                <span className="text-[#414444] font-semibold">Publisher</span>
                {singleGame?.publishers.map((publisher) => (
                  <p
                    key={publisher.id}
                    className="text-base text-gray-200 underline"
                  >
                    {publisher.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-y-5">
              <div>
                <span className="text-[#414444] font-semibold"> Genre</span>
                {singleGame?.genres.map((genres) => (
                  <p
                    key={genres.id}
                    className="text-base text-gray-200 underline"
                  >
                    {genres.name}
                  </p>
                ))}
              </div>
              <div>
                <span className="text-[#414444] font-semibold"> Developer</span>
                {singleGame?.developers.map((developer) => (
                  <p
                    key={developer.id}
                    className="text-base text-gray-200 underline"
                  >
                    {developer.name}
                  </p>
                ))}
              </div>
              <div>
                <span className="text-[#414444] font-semibold">
                  {" "}
                  Age rating
                </span>
                <p className="text-base text-gray-200 underline">
                  {singleGame?.esrb_rating.name}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="text-[#414444] font-semibold "> Tags</p>
              {singleGame?.tags?.map((tag) => (
                <span
                  key={tag.id}
                  className="px-1 text-base text-gray-200 underline "
                >
                  {tag.name}
                </span>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-[#414444] font-semibold"> Website</span>
              {singleGame?.website && (
                <Link
                  to={singleGame?.website}
                  target="_blank"
                  className="text-base text-gray-200 underline cursor-pointer"
                >
                  {singleGame?.website}
                </Link>
              )}
            </div>

            <div className="flex flex-col gap-y-2">
              {singleGame?.platforms.map((requirement) => {
                if (requirement?.requirements?.recommended?.length === 0) {
                  return "";
                }
              })}

              <p className="text-xl font-bold">System requirements for PC</p>

              {showMoreTwo === true ? (
                <>
                  {singleGame?.platforms.map((requirement, index) => (
                    <div key={index}>
                      <p className="text-sm shadow-neutral-300">
                        {" "}
                        {requirement.requirements.minimum}
                      </p>

                      <p className="text-sm">
                        {" "}
                        {requirement.requirements.recommended}
                      </p>
                    </div>
                  ))}

                  <span
                    onClick={() => setShowMoreTwo(false)}
                    className="px-1 -mt-5 text-xs text-black bg-white rounded-md cursor-pointer w-max"
                  >
                    Show less...
                  </span>
                </>
              ) : (
                <>
                  {singleGame?.platforms.map((requirement, index) => (
                    <div key={index}>
                      <p className="text-sm shadow-neutral-300">
                        {" "}
                        {requirement.requirements.minimum?.substring(0, 200)}
                      </p>

                      <p className="text-sm">
                        {" "}
                        {requirement.requirements.recommended?.substring(0, 0)}
                      </p>
                    </div>
                  ))}
                  <span
                    onClick={() => setShowMoreTwo(true)}
                    className="px-1 -mt-5 text-xs text-black bg-white rounded-md cursor-pointer w-max"
                  >
                    Read more...
                  </span>
                </>
              )}
            </div>

            <div className="flex flex-col gap-y-2">
              {singleGame?.platforms.map((platform) => (
                <p
                  key={platform.platform.id}
                  className="text-2xl font-semibold"
                >
                  {" "}
                  System requirements for {platform.platform.name}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[50%] mt-5 ">
          <p className="text-[#706E70] text-lg">Where to buy</p>
          <div className="flex flex-row mt-3 ">
            <div className="flex flex-row flex-wrap gap-x-2 gap-y-3">
              {singleGame?.stores?.map((store) => (
                <div
                  key={store.store.id}
                  className="w-[220px] rounded-md bg-[#2D2D2D] flex flex-row items-center py-2 px-5 gap-x-2 "
                >
                  <p className="text-[#859696]">{store.store.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleGame;
