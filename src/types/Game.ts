import Genres from "./Genres";

export interface Platform {
  platform:{
    id:string,
    name:string
  }
}

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  released: string;
  genres: Genres[];
  parent_platforms: Platform[];
  added:string,
  metacritic:string
}
