import { useParams } from "react-router-dom";
import AddToWatchlistBtn from "../../components/common/AddToWatchlistButton/AddToWatchlistBtn.tsx";
import { useEffect, useState } from "react";
import type { IContent } from "../../types.ts";
import styles from "./ContentDetails.module.css";
import IMDB from "../../assets/imdb.png";

const ContentDetails = () => {
  const [content, setContent] = useState<IContent | null>(null);

  const params = useParams();
  const path =
    params.contentType === "series"
      ? "tv"
      : params.contentType === "movies"
        ? "movie"
        : "";

  useEffect(() => {
    const fetchContent = async () => {
      try {
        if (path) {
          const response = await fetch(
            `https://api.themoviedb.org/3/${path}/${params.id}?api_key=${
              import.meta.env.VITE_API_KEY
            }`,
          );
          const data = await response.json();

          setContent(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchContent();
  }, []);

  return content ? (
    <div className={styles.detailsPage}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${content?.backdrop_path})`,
        }}
      ></div>
      <div className={styles.details}>
        <div className={styles.info}>
          {content.genres.map((g) => (
            <span className={styles.genre} key={g.id}>
              {g.name}
            </span>
          ))}
          <div className={styles.score}>
            <img src={IMDB} alt="imdb-logo" />
            <p>{`${content.vote_average.toFixed(1)} (${content.vote_count})`}</p>
            <p>{content.status}</p>
            <p>{content.release_date}</p>
          </div>
        </div>
        <h2>{"title" in content ? content.title : content.name}</h2>
        <p className={styles.overview}>{content.overview}</p>
        <AddToWatchlistBtn
          size="medium"
          variant="contained"
          content={content}
        />
      </div>
    </div>
  ) : (
    <p>No content found</p>
  );
};

export default ContentDetails;
