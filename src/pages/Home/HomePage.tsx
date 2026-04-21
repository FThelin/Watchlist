import MovieRoll from "../../assets/movie-roll.png";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.page}>
      <img src={MovieRoll} alt="movie-roll" className={styles.img} />
      <h1>
        Welcome to <span className={styles.logo}>Watchlist!</span>
      </h1>
      <p>
        Here, you can browse and find movies and Tv-series that you really would
        want to watch. Keep the list in one place and find where and when you
        can watch them. Stay tuned for more...
      </p>
      <p className={styles.link}>Go to your watchlist</p>
    </div>
  );
};

export default HomePage;
