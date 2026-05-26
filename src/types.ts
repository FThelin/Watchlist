interface IContentBase {
  id: number;
  backdrop_path: string;
  genres: GenreType[];
  overview: string;
  release_date: string;
  status: string;
  vote_average: number;
  vote_count: number;
  poster_path: string;
}
export interface IContentMovie extends IContentBase {
  title: string;
}
export interface IContentSeries extends IContentBase {
  name: string;
}

export type IContent = IContentMovie | IContentSeries;

type GenreType = {
  id: number;
  name: string;
};

export type MovieListType = "popular" | "top_rated" | "upcoming";
export type SeriesListType = "popular" | "top_rated" | "on_the_air";
export type ContentListType = MovieListType | SeriesListType;
