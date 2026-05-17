import { Button } from "@mui/material";
import { useContext } from "react";
import { WatchlistContext } from "../../../context/WatchlistContext.tsx";
import { useLocation } from "react-router-dom";
import type { IContent } from "../../../types.ts";

interface Props {
  size: "small" | "medium" | "large";
  variant: "text" | "outlined" | "contained";
  content: IContent;
}

const AddToWatchlistBtn = ({ size, variant, content }: Props) => {
  const { addToWatchlist } = useContext(WatchlistContext);

  const { pathname } = useLocation();
  const contentType = pathname.split("/")[1];

  const addContentToWatchlist = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    addToWatchlist(content, contentType);
  };

  return (
    <Button
      size={size}
      variant={variant}
      style={{
        color: variant === "text" ? "white" : "black",
        fontSize: 11,
        backgroundColor: variant === "contained" ? "rgb(228, 219, 134)" : "",
      }}
      onClick={addContentToWatchlist}
    >
      Add to watchlist +
    </Button>
  );
};

export default AddToWatchlistBtn;
