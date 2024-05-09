import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { GameContext } from "../context/GameContext";
import { SingleGame, GameImages } from "../lib/types";
import { BASE_URL } from "../constant";

export function useGamesContext() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGames must be used within a GameProvider");
  }
  return context;
}

export function useSingleGames(gameSlug: string | undefined) {
  const [singleGame, setSingleGame] = useState<SingleGame | null>(null);
  const { setIsLoading, isLoading } = useGamesContext();

  useEffect(() => {
    const getSingleGame = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `${BASE_URL}games/${gameSlug}?key=${import.meta.env.VITE_API_KEY}`
        );
        setSingleGame(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getSingleGame();
  }, [gameSlug, setIsLoading]);

  return {
    singleGame,
    isLoading,
  };
}

export function useSingleGamesImages(gameSlug: string | undefined) {
  const [singleGameImages, setSingleGameImages] = useState<GameImages[]>([]);
  const displayedImages = singleGameImages.slice(0, 4);

  useEffect(() => {
    const getSingleGameScreenshots = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}games/${gameSlug}/screenshots?key=${
            import.meta.env.VITE_API_KEY
          }`
        );
        setSingleGameImages(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleGameScreenshots();
  }, [gameSlug]);

  return {
    displayedImages,
  };
}
