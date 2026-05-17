import { createContext, useState, type PropsWithChildren } from "react";
import type { IContent } from "../types.ts";

interface IWatchlistContext {
  watchlistMovies: WatchlistContentType[];
  watchlistSeries: WatchlistContentType[];
  addToWatchlist: (content: IContent, contentType: string) => void;
}

interface WatchlistContentType {
  id: number;
  poster_path: string;
  title: string;
}

export const WatchlistContext = createContext<IWatchlistContext>({
  watchlistMovies: [],
  watchlistSeries: [],
  addToWatchlist: () => {},
});

const WatchListProvider = ({ children }: PropsWithChildren) => {
  const [watchlistMovies, setWatchlistMovies] = useState<
    WatchlistContentType[]
  >([]);
  const [watchlistSeries, setWatchlistSeries] = useState<
    WatchlistContentType[]
  >([]);

  const addToWatchlist = (content: IContent, contentType: string) => {
    if (!content) return;

    const contentToAdd = {
      id: content.id,
      poster_path: content.poster_path,
      title: "title" in content ? content.title : content.name,
    };

    if (contentType === "movies") {
      setWatchlistMovies([...watchlistMovies, contentToAdd]);
    } else {
      setWatchlistSeries([...watchlistSeries, contentToAdd]);
    }
  };

  return (
    <WatchlistContext.Provider
      value={{ watchlistMovies, watchlistSeries, addToWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export default WatchListProvider;
