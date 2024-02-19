import React from "react";
import { FaWindows, FaPlaystation } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa6";

interface SingleGameProps {
  backgroundImage: string;
  releaseDate: string;
  playTime: number;
  gameDescription: string;
  platforms: string;
  publisher: string;
  developer: string;
  tag: string;
  websiteUrl: string;
}

const SingleGame: React.FC<SingleGameProps> = () => {
  const image: string =
    "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg";

  return (
    <section className="flex flex-col font-Poppins">
      <img
        src={image}
        alt=""
        className="bg-center bg-no-repeat bg-auto rounded-md opacity-25"
      />

      <div className="absolute flex flex-row px-10 py-10 gap-y-5">
        {/* right  */}
        <div className="flex flex-col gap-y-5 w-[60%]">
          <div className="flex flex-row items-center gap-x-5">
            <span className="px-1 text-sm text-black bg-white rounded-md">
              SEP 17, 2013
            </span>
            <div className="flex flex-row gap-x-2">
              <FaWindows size={"1.2rem"} />
              <FaPlaystation size={"1.2rem"} />
            </div>
            <span className="text-sm uppercase text-neutral-200">
              AveRAGE PLAYTIME: 74 HOURS
            </span>
          </div>
          <div className="flex flex-col gap-y-5">
            <p className="font-bold text-7xl">Grand Theft Auto V</p>
            <div className="flex flex-row items-center gap-x-5">
              <div className="flex flex-col gap-y-2">
                <p className="text-xl font-semibold">Exceptional 🔥</p>
                <span className="text-sm text-gray-400 underline cursor-pointer hover:text-gray-100">
                  {" "}
                  6841 RATINGS
                </span>
              </div>
              <div className="flex flex-col">
                <p className="text-xl font-semibold"># 1</p>
                <span className="text-sm text-gray-400 underline cursor-pointer hover:text-gray-100">
                  ACTION
                </span>
              </div>
              <div>
                <p className="text-xl font-semibold"># 1</p>
                <span className="text-sm text-gray-400 underline cursor-pointer hover:text-gray-100">
                  TOP 2013
                </span>
              </div>
            </div>
          </div>
          <div></div>
        </div>

        {/* left */}
        <div className="w-[40%]  flex flex-row gap-5">
          <div className="flex flex-col gap-y-5">
            <img
              src="https://media.rawg.io/media/resize/200/-/screenshots/433/43329e11379a4634300e76a5d3f7d30b.jpg"
              alt=""
            />
            <img
              src="https://media.rawg.io/media/resize/200/-/screenshots/899/89923bcc668b1647a4abb140273343a7.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-y-5">
            <img
              src="https://media.rawg.io/media/resize/200/-/screenshots/c3a/c3adfcdc49f4f0b112b0d576c3d9ca9d.jpg"
              alt=""
            />
            <img
              src="https://media.rawg.io/media/resize/200/-/screenshots/c3a/c3adfcdc49f4f0b112b0d576c3d9ca9d.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row w-full px-10 py-10">
        <div className="flex flex-col mt-5 gap-y-8 w-[60%]">
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
            <p>
              Sired in an act of vampire insurrection, your existence ignites
              the war for Seattle's blood trade. Enter uneasy alliances with the
              creatures who control the city and uncover the sprawling
              conspiracy which plunged Seattle into a bloody civil war between
              powerful vampire factions. ♞Become the Ultimate Vampire Immerse
              yourself in the World of Darkness and live out your vampire
              fantasy in a city filled with intriguing characters that react to
              your choices. You and your unique disciplines are a weapon in our
              forward-driving, fast-moving, melee-focussed combat system. Your
              power will grow as you advance, but remember to uphold the
              Masquerade and guard your humanity... or face the consequences.
            </p>
          </div>
          <div className="flex flex-row gap-x-5">
            <div className="flex flex-col gap-y-5">
              <div>
                <span className="text-[#414444] font-semibold"> Platforms</span>
                <p className="text-base text-gray-200 underline">
                  PlayStation 5, Xbox Series S/X, <br /> PC, Xbox One,
                  PlayStation 4
                </p>
              </div>
              <div>
                <span className="text-[#414444] font-semibold">
                  {" "}
                  Release date
                </span>
                <p className="text-base text-gray-200 underline">TBA</p>
              </div>
              <div>
                <span className="text-[#414444] font-semibold">Publisher</span>
                <p className="text-base text-gray-200 underline">
                  Paradox Interactive
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-5">
              <div>
                <span className="text-[#414444] font-semibold"> Genre</span>
                <p className="text-base text-gray-200 underline">Action, RPG</p>
              </div>
              <div>
                <span className="text-[#414444] font-semibold"> Developer</span>
                <p className="text-base text-gray-200 underline">
                  Hardsuit Labs
                </p>
              </div>
              <div>
                <span className="text-[#414444] font-semibold">
                  {" "}
                  Age rating
                </span>
                <p className="text-base text-gray-200 underline">Not rated</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div>
              <span className="text-[#414444] font-semibold"> Tags</span>
              <p className="text-base text-gray-200 underline">
                Singleplayer, Steam Achievements, Multiplayer, Full controller
                support, Atmospheric, Great Soundtrack, RPG, Co-op, Open World,
                cooperative, First-Person, Third Person, Funny, Sandbox, Comedy,
                Third-Person Shooter, Moddable, Crime, vr mod, Third Person,
                Funny, Sandbox, Comedy, Third-Person Shooter, Moddable, Crime,
                vr mod, От первого лица, Шедевр, От третьего лица, Third Person,
                Смешная, Funny, Sandbox, Юмор, Песочница, Comedy, Шутер от
                третьего лица, Third-Person Shooter, Moddable, Поддержка
                модификаций, Для взрослых, Гонки, Crime, Криминал, vr mod
              </p>
            </div>
            <div>
              <span className="text-[#414444] font-semibold"> Website</span>
              <p className="text-base text-gray-200 underline">
                http://www.rockstargames.com/V/
              </p>
            </div>
            <div>
              <span className="text-xl font-bold">
                System requirements for PC
              </span>
              <ul className="mt-3 space-y-4 list-inside">
                <li>
                  <span className="font-semibold"> Minimum:</span>
                  <ol className="mt-2 space-y-1 list-disc list-inside ps-5">
                    <li className="text-sm">
                      <span className="font-semibold">OS:</span> Win 10 (64 bit)
                    </li>
                    <li className="text-sm">
                      <span className="font-semibold">OS:</span> Win 10 (64 bit)
                    </li>
                    <li className="text-sm">
                      <span className="font-semibold">OS:</span> Win 10 (64 bit)
                    </li>
                    <li className="text-sm">
                      <span className="font-semibold">OS:</span> Win 10 (64 bit)
                    </li>
                  </ol>
                </li>
                <li>
                  <span className="font-semibold"> Recommended:</span>
                  <ol className="mt-2 space-y-1 list-disc list-inside ps-5">
                    <li className="text-sm">
                      <span className="font-semibold">OS:</span> Win 10 (64 bit)
                    </li>
                    <li className="text-sm">
                      <span className="font-semibold">OS:</span> Win 10 (64 bit)
                    </li>
                    <li className="text-sm">
                      <span className="font-semibold">OS:</span> Win 10 (64 bit)
                    </li>
                    <li className="text-sm">
                      <span className="font-semibold">OS:</span> Win 10 (64 bit)
                    </li>
                  </ol>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-2xl font-semibold">
                {" "}
                System requirements for PlayStation 5
              </p>
              <p className="text-2xl font-semibold">
                {" "}
                System requirements for Xbox 360
              </p>
              <p className="text-2xl font-semibold">
                {" "}
                System requirements for PlayStation 5
              </p>
              <p className="text-2xl font-semibold">
                {" "}
                System requirements for Xbox 360
              </p>
            </div>
          </div>
        </div>
        <div className="w-[40%]"></div>
      </div>
    </section>
  );
};

export default SingleGame;

// https://api.rawg.io/api/games/3498/screenshots?key=3459e29b365e4cc4a47bc6b49afa4273    screenshort url
