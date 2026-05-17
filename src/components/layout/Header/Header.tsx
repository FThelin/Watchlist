import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Watchlist</h1>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/series">Series</NavLink>
        <NavLink to="/watchlist">Watchlist</NavLink>
      </nav>
    </header>
  );
};

export default Header;
