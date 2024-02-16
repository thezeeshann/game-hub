import Genres from "./Genres";

export default interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  released:string,
  genres: Genres[];
}
