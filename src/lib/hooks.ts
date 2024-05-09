import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { GameContext } from "../context/GameContext";
import { BASE_URL } from "../constant";
import { SingleGame, GameImages } from "../lib/types";
import {
  BrowsePlatfroms,
  BrowseStore,
  BrowseTags,
  BrowseCreators,
  BrowseDeveloper,
  BrowseGenres,
  BrowsePublisher,
} from "../lib/browse-types";

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

export function useBrowsePlatforms() {
  const [browsePlatforms, setBrowsePlatfroms] = useState<BrowsePlatfroms[]>([]);
  const { setIsLoading, isLoading } = useGamesContext();

  useEffect(() => {
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

    getPlatforms();
  }, [setIsLoading]);

  return {
    browsePlatforms,
    isLoading,
  };
}

export function useBrowseStore() {
  const [stores, setStores] = useState<BrowseStore[]>([]);
  const { setIsLoading, isLoading } = useGamesContext();

  useEffect(() => {
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

    getStores();
  }, [setIsLoading]);

  return {
    stores,
    isLoading,
  };
}

export function useBrowseGenres() {
  const [genres, setGenres] = useState<BrowseGenres[]>([]);
  const { setIsLoading, isLoading } = useGamesContext();

  useEffect(() => {
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
    getGenres();
  }, [setIsLoading]);

  return {
    genres,
    isLoading,
  };
}

export function useBrowsePublishers() {
  const [publishers, setPublishers] = useState<BrowsePublisher[]>([]);
  const { isLoading, setIsLoading } = useGamesContext();

  useEffect(() => {
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

    getPublishers();
  }, [setIsLoading]);

  return {
    publishers,
    isLoading,
  };
}

export function useBrowseCreators() {
  const [creators, setCreators] = useState<BrowseCreators[]>([]);
  const { setIsLoading, isLoading } = useGamesContext();

  useEffect(() => {
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
    getCreators();
  }, [setIsLoading]);
  return {
    creators,
    isLoading,
  };
}

export function useBrowseDevelopers() {
  const [developer, setDeveloper] = useState<BrowseDeveloper[]>([]);
  const { setIsLoading, isLoading } = useGamesContext();

  useEffect(() => {
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

    getDevelopers();
  }, [setIsLoading]);

  return {
    developer,
    isLoading,
  };
}

export function useBrowseTags() {
  const [tags, setTags] = useState<BrowseTags[]>([]);
  const { setIsLoading, isLoading } = useGamesContext();

  useEffect(() => {
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
    getTags();
  }, [setIsLoading]);

  return {
    tags,
    isLoading,
  };
}
