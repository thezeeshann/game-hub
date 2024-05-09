import { Games } from "./types";

export type BrowseCreators = {
  id: number;
  image_background: string;
  image: string;
  name: string;
  games_count: number;
  games: Games[];
  positions: Positions[];
};

export type Positions = {
  id: number;
  name: string;
};

export type BrowseDeveloper = {
  id: number;
  image_background: string;
  name: string;
  games_count: number;
  games: Games[];
};

export type BrowseGenres = {
  id: number;
  image_background: string;
  name: string;
  games_count: number;
  games: Games[];
};

export type BrowsePlatfroms = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: Games[];
};

export type BrowsePublisher = {
  id: number;
  image_background: string;
  name: string;
  games_count: number;
  games: Games[];
};

export type BrowseStore = {
  id: number;
  image_background: string;
  name: string;
  games_count: number;
  games: Games[];
};

export type BrowseTags = {
  id: number;
  image_background: string;
  name: string;
  games_count: number;
  games: Games[];
};
