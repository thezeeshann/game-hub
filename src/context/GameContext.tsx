import React, { createContext, useEffect, useState } from "react";
import { Games } from "../lib/types";
import { BASE_URL } from "../constant";
import axios from "axios";

type GameContextProviderPros = {
  children: React.ReactNode;
};

type GameContext = {
  games: Games[];
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  errorMessage: string;
};

export const GameContext = createContext<GameContext | null>(null);

const GameContextProvider = ({ children }: GameContextProviderPros) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [games, setGames] = useState<Games[]>([]);

  useEffect(() => {
    const getGame = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `${BASE_URL}games?key=${import.meta.env.VITE_API_KEY}`
        );
        setGames(res.data.results);
      } catch (error) {
        setErrorMessage("Something went wrong. Please try again later?");
      } finally {
        setIsLoading(false);
      }
    };
    getGame();
  }, []);

  return (
    <GameContext.Provider
      value={{
        games,
        isLoading,
        setIsLoading,
        errorMessage,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
