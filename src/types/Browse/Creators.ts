export interface BrowseCreators {
  id: number;
  image_background: string;
  image: string;
  name: string;
  games_count: number;
  games: Games[];
  positions: Positions[];
}

export interface Positions {
  id: number;
  name: string;
}

export interface Games {
  id: number;
  name: string;
  added: number;
}
