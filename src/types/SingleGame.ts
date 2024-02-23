export interface SingleGameProps {
  name: string;
  background_image: string;
  released: string;
  playtime: number;
  description_raw: string;
  platforms: Platforms[];
  publishers: Publishers[];
  developers: Developers[];
  tags: Tags[];
  website: string;
  ratings: Ratings[];
  ratings_count: number;
  genres: Genres[];
  esrb_rating: { name: string };
  metacritic: number;
  stores: Store[];
  metacritic_platforms: Metacritic[];
  parent_platforms: Parent_Platforms[];
}

export interface Parent_Platforms {
  platform:{
    id:number,
    slug:string
  }
}

export interface Metacritic {
  platform: {
    name: string;
    platform: number;
  };
}

export interface Platforms {
  requirements: {
    minimum: string;
    recommended: string;
  };

  platform: {
    id: number;
    name: string;
  };
}

export interface Store {
  store: {
    id: number;
    name: string;
    slug: string;
  };
}

export interface Publishers {
  id: string;
  name: string;
}

export interface Developers {
  id: string;
  name: string;
}

export interface Tags {
  id: string;
  name: string;
}

export interface Genres {
  id: number;
  name: string;
}

export interface Ratings {
  id: number;
  title: string;
  count: number;
}

export interface GameScreenshots {
  id: number;
  image: string;
}
