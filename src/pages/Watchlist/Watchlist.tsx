import { useContext } from "react";
import { WatchlistContext } from "../../context/WatchlistContext.tsx";
import { Avatar, List, ListItem, ListItemAvatar } from "@mui/material";
import styles from "./Watchlist.module.css";

const Watchlist = () => {
  const { watchlistMovies, watchlistSeries } = useContext(WatchlistContext);

  return (
    <div className={styles.watchlist}>
      <div>
        <h3>Movies</h3>
        {watchlistMovies.map((m) => (
          <List sx={{ display: "flex" }}>
            <ListItemAvatar>
              <Avatar
                alt={m.title}
                src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
              />
            </ListItemAvatar>
            <ListItem>{m.title}</ListItem>
          </List>
        ))}
      </div>
      <div>
        <h3>Series</h3>
        {watchlistSeries.map((m) => (
          <List sx={{ display: "flex" }}>
            <ListItemAvatar>
              <Avatar
                alt={m.title}
                src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
              />
            </ListItemAvatar>
            <ListItem>{m.title}</ListItem>
          </List>
        ))}
      </div>
    </div>
  );
};

export default Watchlist;
