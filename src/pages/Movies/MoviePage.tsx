import { useEffect, useState } from "react";
import ContentGrid from "../../components/common/ContentGrid/ContentGrid.tsx";
import FilterDropdown from "../../components/common/FilterDropdown/FilterDropdown.tsx";
import type {
  IContentCard,
  ContentListType,
  MovieListType,
} from "../../types.ts";
import styles from "./MoviePage.module.css";

const MoviePage = () => {
  const [movies, setMovies] = useState<IContentCard[] | null>(null);
  const [listType, setListType] = useState<MovieListType>("popular");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${listType}?api_key=${
            import.meta.env.VITE_API_KEY
          }`,
        );
        const data = await response.json();

        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [listType]);

  const updateMovieListType = (listType: ContentListType) => {
    setListType(listType as MovieListType);
  };

  return (
    <div className={styles.page}>
      <h3 className={styles.title}>Movies</h3>
      <FilterDropdown
        listType={listType}
        updateListType={updateMovieListType}
      />
      <ContentGrid content={movies} />
    </div>
  );
};

export default MoviePage;
