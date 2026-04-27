import { useEffect, useState } from "react";
import ContentGrid from "../../components/common/ContentGrid/ContentGrid.tsx";
import FilterDropdown from "../../components/common/FilterDropdown/FilterDropdown.tsx";
import type { IContentCard } from "../../types.ts";
import styles from "./MoviePage.module.css";

const MoviePage = () => {
  const [movies, setMovies] = useState<IContentCard[] | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${
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
  }, []);

  return (
    <div className={styles.page}>
      <h3 className={styles.title}>Movies</h3>
      <FilterDropdown />
      <ContentGrid content={movies} />
    </div>
  );
};

export default MoviePage;
