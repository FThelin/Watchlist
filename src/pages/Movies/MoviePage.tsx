import ContentGrid from "../../components/common/ContentGrid/ContentGrid.tsx";
import FilterDropdown from "../../components/common/FilterDropdown/FilterDropdown.tsx";
import type { IContent } from "../../types.ts";
import styles from "./MoviePage.module.css";

const MoviePage = () => {
  const movies: IContent[] = [
    { id: "1", title: "Movie1" },
    { id: "2", title: "Movie2" },
    { id: "3", title: "Movie3" },
    { id: "4", title: "Movie4" },
  ];

  return (
    <div className={styles.page}>
      <h3 className={styles.title}>Movies</h3>
      <FilterDropdown />
      <ContentGrid content={movies} />
    </div>
  );
};

export default MoviePage;
