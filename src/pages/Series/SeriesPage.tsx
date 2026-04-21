import ContentGrid from "../../components/common/ContentGrid/ContentGrid.tsx";
import FilterDropdown from "../../components/common/FilterDropdown/FilterDropdown.tsx";
import type { IContent } from "../../types.ts";
import styles from "./SeriesPage.module.css";

const SeriesPage = () => {
  const series: IContent[] = [
    { id: "1", title: "Series1" },
    { id: "2", title: "Series2" },
    { id: "3", title: "Series3" },
    { id: "4", title: "Series4" },
  ];

  return (
    <div className={styles.page}>
      <h3 className={styles.title}>Series</h3>
      <FilterDropdown />
      <ContentGrid content={series} />
    </div>
  );
};

export default SeriesPage;
