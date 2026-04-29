import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import type { ContentListType } from "../../../types.ts";
import { useLocation } from "react-router-dom";
interface Props {
  listType: ContentListType;
  updateListType: (listType: ContentListType) => void;
}

const FilterDropdown = ({ listType, updateListType }: Props) => {
  const { pathname } = useLocation();
  const path = pathname.split("/")[1];

  return (
    <FormControl>
      <InputLabel id="content-select-label">Select category</InputLabel>
      <Select
        labelId="content-select-label"
        id="content-select-label"
        value={listType}
        style={{ width: 200 }}
        label="Select category"
        onChange={(e) => updateListType(e.target.value)}
      >
        <MenuItem value={"popular"}>Popular</MenuItem>
        <MenuItem value={"top_rated"}>Top Rated</MenuItem>
        {path === "series" ? (
          <MenuItem value={"on_the_air"}>On The Air</MenuItem>
        ) : (
          <MenuItem value={"upcoming"}>Upcoming</MenuItem>
        )}
      </Select>
    </FormControl>
  );
};

export default FilterDropdown;
