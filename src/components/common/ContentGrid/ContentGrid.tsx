import type { IContent } from "../../../types.ts";
import ContentCard from "../ContentCard/ContentCard.tsx";
import styles from "./ContentGrid.module.css";

const ContentGrid = ({ content }: { content: IContent[] }) => {
  return (
    <div className={styles.grid}>
      <ContentCard content={content[0]} />
      <ContentCard content={content[1]} />
      <ContentCard content={content[2]} />
      <ContentCard content={content[3]} />
    </div>
  );
};

export default ContentGrid;
