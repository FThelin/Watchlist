import type { IContent } from "../../../types.ts";
import AddToWatchlistBtn from "../FavoritesButton/AddToWatchlistBtn.tsx";
import styles from "./ContentCard.module.css";

const ContentCard = ({ content }: { content: IContent }) => {
  return (
    <div className={styles.card}>
      <h3>{content.title}</h3>
      <AddToWatchlistBtn />
    </div>
  );
};

export default ContentCard;
