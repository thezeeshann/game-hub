import React, { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constant";
import { Game } from "../types/Game";


type MyContextData = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  games: Game[];
  setGames:React.Dispatch<React.SetStateAction<Game[]>>;
};

const AppContext = createContext<MyContextData | undefined>(undefined);

type MyContextProviderProps = {
  children: ReactNode;
};

export const AppContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [games, setGames] = useState<Game[]>([]);

  const getGame = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `${BASE_URL}games?key=${import.meta.env.VITE_API_KEY}`
      );
      setGames(res.data.results);
    } catch (error) {
      console.log("Something went wrong while fetching the data ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getGame();
  }, []);

  const contextValue: MyContextData = {
    isLoading,
    setIsLoading,
    games,
    setGames,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContext;
