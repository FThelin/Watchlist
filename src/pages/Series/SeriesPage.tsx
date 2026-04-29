import { useEffect, useState } from "react";
import ContentGrid from "../../components/common/ContentGrid/ContentGrid.tsx";
import FilterDropdown from "../../components/common/FilterDropdown/FilterDropdown.tsx";
import {
  type ContentListType,
  type IContentCard,
  type SeriesListType,
} from "../../types.ts";
import styles from "./SeriesPage.module.css";

const SeriesPage = () => {
  const [series, setSeries] = useState<IContentCard[] | null>(null);
  const [listType, setListType] = useState<SeriesListType>("popular");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/${listType}?api_key=${
            import.meta.env.VITE_API_KEY
          }`,
        );
        const data = await response.json();

        setSeries(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [listType]);

  const updateSeriesListType = (listType: ContentListType) => {
    setListType(listType as SeriesListType);
  };

  return (
    <div className={styles.page}>
      <h3 className={styles.title}>Series</h3>
      <FilterDropdown
        listType={listType}
        updateListType={updateSeriesListType}
      />
      <ContentGrid content={series} />
    </div>
  );
};

export default SeriesPage;
