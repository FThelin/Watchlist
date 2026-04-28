import type { IContentCard } from "../../../types.ts";
import ContentCard from "../ContentCard/ContentCard.tsx";
import styles from "./ContentGrid.module.css";

const ContentGrid = ({ content }: { content: IContentCard[] | null }) => {
  return (
    <div className={styles.grid}>
      {content?.map((c) => (
        <ContentCard key={c.id} content={c} />
      ))}
    </div>
  );
};

export default ContentGrid;
