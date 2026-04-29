import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import type { ContentListType } from "../../../types.ts";
interface Props {
  listType: ContentListType;
  updateListType: (listType: ContentListType) => void;
}

const FilterDropdown = ({ listType, updateListType }: Props) => {
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
        {/* //TODO Denna skall vara on_the_air om vi är inne på tv-serier. Fixa med url parameter när vi har routing på plats */}
        <MenuItem value={"upcoming"}>Upcoming</MenuItem>
      </Select>
    </FormControl>
  );
};

export default FilterDropdown;
