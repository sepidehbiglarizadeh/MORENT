import { MenuItem, Select } from "@mui/material";

const options = [
  { value: "berlin", label: "Berlin" },
  { value: "frankfurt", label: "Frankfurt" },
  { value: "munich", label: "Munich" },
  { value: "Leipzig", label: "Leipzig" },
  { value: "cologne", label: "Cologne" },
  { value: "dusseldorf", label: "Dusseldorf" },
  { value: "humburg", label: "Humburg" },
  { value: "stuttgart", label: "Stuttgart" },
  { value: "dresden", label: "Dresden" },
  { value: "nuremburg", label: "Nuremburg" },
  { value: "bremen", label: "Bremen" },
  { value: "bonn", label: "Bonn" },
];

const MyLocationPicker = () => {
  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value=""
      sx={{
        "& .MuiOutlinedInput-root": {
          padding: 0,
        },
        "& .MuiOutlinedInput-notchedOutline": { border: "none" },
        "& .MuiInputBase-input": {
          fontSize: 12,
          padding: 0,
          color: "#90A3BF",
        },
      }}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {options.map((item) => (
        <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
      ))}
    </Select>
  );
};

export default MyLocationPicker;
