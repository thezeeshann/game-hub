import Genres from "./Genres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  released: string;
  genres: Genres[];
  parent_platforms: {platform:Platform}[];
  added:string,
  metacritic:string
}
