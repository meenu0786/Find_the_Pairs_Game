import React from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { pairOptions } from "../../utils/Constants";

const index = ({ option, setOption }) => {
  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <FormControl className="form-control">
      <Select
        value={option}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value={8}>Select pairs</MenuItem>
        {pairOptions.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default index;
