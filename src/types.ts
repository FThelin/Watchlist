export interface IContentCard {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
  release_date: string;
}

export type MovieListType = "popular" | "top_rated" | "upcoming";
export type SeriesListType = "popular" | "top_rated" | "on_the_air";
export type ContentListType = MovieListType | SeriesListType;
