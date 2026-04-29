export interface IContentCard {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
  release_date: string;
}

export interface IContentDetails {
  id: number;
  backdrop_path: string;
  genres: GenreType[];
  title?: string;
  name?: string;
  overview: string;
  release_date: string;
  status: string;
  vote_average: number;
  vote_count: number;
}

type GenreType = {
  id: number;
  name: string;
};

export type MovieListType = "popular" | "top_rated" | "upcoming";
export type SeriesListType = "popular" | "top_rated" | "on_the_air";
export type ContentListType = MovieListType | SeriesListType;
