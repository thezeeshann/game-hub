import React, { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constant";
import { Game } from "../types/Game";
import { BrowsePlatfroms } from "../types/Browse/Platforms";
import { BrowseStore } from "../types/Browse/Store";
import { BrowseGenres } from "../types/Browse/Genres";
import { BrowsePublisher } from "../types/Browse/publishers";

type MyContextData = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  games: Game[];
  setGames: React.Dispatch<React.SetStateAction<Game[]>>;
};

const AppContext = createContext<MyContextData | null>(null);

type MyContextProviderProps = {
  children: ReactNode;
};

export const AppContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [games, setGames] = useState<Game[]>([]);
  const [browsePlatforms, setBrowsePlatfroms] = useState<BrowsePlatfroms>([]);
  const [stores, setStores] = useState<BrowseStore>([]);
  const [genres, setGenres] = useState<BrowseGenres>([]);
  const [publishers, setPublishers] = useState<BrowsePublisher>();
  const [creators, setCreators] = useState();
  const [tags,setTags] = useState()
  const [developer,setDeveloper] = useState()

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

  const getPlatforms = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `${BASE_URL}platforms?key=${import.meta.env.VITE_API_KEY}`
      );
      setBrowsePlatfroms(res.data.results);
    } catch (error) {
      console.log("something went wrong while fetching platfroms", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStores = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `${BASE_URL}stores?key=${import.meta.env.VITE_API_KEY}`
      );
      setStores(res.data.results);
    } catch (error) {
      console.log("something went wrong while fetching stores", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getGenres = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `${BASE_URL}genres?key=${import.meta.env.VITE_API_KEY}`
      );
      setGenres(res.data.results);
    } catch (error) {
      console.log("something went wrong while fetching genres ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getPublishers = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `${BASE_URL}publishers?key=${import.meta.env.VITE_API_KEY}`
      );
      setPublishers(res.data.results);
    } catch (error) {
      console.log("something went wrong while fetching publisher", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getCreators = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `${BASE_URL}creators?key=${import.meta.env.VITE_API_KEY}`
      );
      setCreators(res.data.results);
    } catch (error) {
      console.log("something went wrong while fetching creators", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getDevelopers = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `${BASE_URL}developers?key=${import.meta.env.VITE_API_KEY}`
      );
      setDeveloper(res.data.results);
    } catch (error) {
      console.log("something went wrong while fetching developers", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getTags = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `${BASE_URL}tags?key=${import.meta.env.VITE_API_KEY}`
      );
      setTags(res.data.results);
    } catch (error) {
      console.log("something went wrong while fetching tags", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getGame();
    getPlatforms();
    getStores();
    getGenres();
    getPublishers();
    getCreators();
    getDevelopers();
    getTags();
  }, []);

  const contextValue: MyContextData = {
    isLoading,
    setIsLoading,
    games,
    browsePlatforms,
    stores,
    genres,
    publishers,
    creators,
    tags,
    developer
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContext;
