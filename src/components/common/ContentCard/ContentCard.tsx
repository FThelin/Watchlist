import { Link, useLocation } from "react-router-dom";
import AddToWatchlistBtn from "../AddToWatchlistButton/AddToWatchlistBtn.tsx";
import styles from "./ContentCard.module.css";
import type { IContent } from "../../../types.ts";

const ContentCard = ({ content }: { content: IContent }) => {
  const { pathname } = useLocation();

  return (
    <Link to={`${pathname}/${content.id}`}>
      <div
        className={styles.card}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${content.poster_path})`,
        }}
      >
        <div className={styles.cardTitle}>
          <h3>{"title" in content ? content.title : content.name}</h3>
        </div>
        <div className={styles.cardButton}>
          <AddToWatchlistBtn size="small" variant="text" content={content} />
        </div>
      </div>
    </Link>
  );
};

export default ContentCard;
