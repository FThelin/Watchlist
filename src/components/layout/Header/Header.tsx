import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Watchlist</h1>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/series">Series</Link>
        <Link to="/watchlist">Watchlist</Link>
      </nav>
    </header>
  );
};

export default Header;
