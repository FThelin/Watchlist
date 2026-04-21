import styles from "./Header.module.css";

interface Props {
  changePage: (page: string) => void;
}

const Header = ({ changePage }: Props) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Watchlist</h1>
      <ul className={styles.nav}>
        <li onClick={() => changePage("home")}>Home</li>
        <li onClick={() => changePage("movies")}>Movies</li>
        <li onClick={() => changePage("series")}>Series</li>
        <li onClick={() => changePage("watchlist")}>Watchlist</li>
      </ul>
    </header>
  );
};

export default Header;
