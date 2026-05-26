import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";
import { Badge } from "@mui/material";
import { useContext } from "react";
import { WatchlistContext } from "../../../context/WatchlistContext.tsx";

const Header = () => {
  const { watchlistMovies, watchlistSeries } = useContext(WatchlistContext);
  const watchlistLength = watchlistMovies.length + watchlistSeries.length;

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Watchlist</h1>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/series">Series</NavLink>
        <Badge badgeContent={watchlistLength} color="secondary">
          <NavLink to="/watchlist">Watchlist</NavLink>
        </Badge>
      </nav>
    </header>
  );
};

export default Header;
