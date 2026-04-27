import type { IContentCard } from "../../../types.ts";
import AddToWatchlistBtn from "../FavoritesButton/AddToWatchlistBtn.tsx";
import styles from "./ContentCard.module.css";

const ContentCard = ({ content }: { content: IContentCard }) => {
  console.log(content);
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${content.poster_path})`,
      }}
    >
      <div className={styles.cardTitle}>
        <AddToWatchlistBtn />
        <h3>{content.title ? content.title : content.name}</h3>
      </div>
    </div>
  );
};

export default ContentCard;
