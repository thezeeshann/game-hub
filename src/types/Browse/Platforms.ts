export interface BrowsePlatfroms {
  id: number;
  image_background: string;
  name: string;
  games_count: number;
  games: Games[];
}

export interface Games {
  id: number;
  name: string;
  added:number
}
