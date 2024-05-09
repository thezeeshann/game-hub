export type Games = {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  released: string;
  genres: Genres[];
  parent_platforms: { platform: Platform }[];
  added: string;
  metacritic: string;
};

export type SingleGame = Games & {
  playtime: number;
  description_raw: string;
  platforms: Platforms[];
  publishers: Publishers[];
  developers: Developers[];
  tags: Tags[];
  website: string;
  ratings: Ratings[];
  ratings_count: number;
  esrb_rating: { name: string };
  stores: Store[];
  metacritic_platforms: Metacritic[];
};

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

export type Genres = {
  id: number;
  name: string;
};

export type Metacritic = {
  metascore: number;
  url: string;
  platform: {
    name: string;
    platform: number;
  };
};

export type Platforms = {
  requirements: {
    minimum: string;
    recommended: string;
  };

  platform: {
    id: number;
    name: string;
  };
};

export type Store = {
  store: {
    id: number;
    name: string;
    slug: string;
  };
};

export type Publishers = {
  id: string;
  name: string;
};

export type Developers = {
  id: string;
  name: string;
};

export type Tags = {
  id: string;
  name: string;
};

export type Ratings = {
  id: number;
  title: string;
  count: number;
};

export type GameImages = {
  id: number;
  image: string;
};
