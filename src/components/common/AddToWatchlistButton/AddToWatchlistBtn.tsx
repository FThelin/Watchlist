import { Button } from "@mui/material";

interface Props {
  size: "small" | "medium" | "large";
  variant: "text" | "outlined" | "contained";
}

const AddToWatchlistBtn = ({ size, variant }: Props) => {
  return (
    <Button
      size={size}
      variant={variant}
      style={{
        color: variant === "text" ? "white" : "black",
        fontSize: 11,
        backgroundColor: variant === "contained" ? "rgb(228, 219, 134)" : "",
      }}
    >
      Add to watchlist +
    </Button>
  );
};

export default AddToWatchlistBtn;
