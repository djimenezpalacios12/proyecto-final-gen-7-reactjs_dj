import React from "react";
import { Box, TextField } from "@material-ui/core";
import propType from "prop-types";

export default function InputField({ ...props }) {
  return (
    <Box
      component="div"
      sx={{
        "& > :not(style)": { m: 1, width: "30ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField variant="outlined" {...props} />
    </Box>
  );
}

// PropsType
InputField.propType = {
  id: propType.string,
  name: propType.string,
  type: propType.string,
  fullWidth: propType.bool,
  label: propType.string,
  margin: propType.string,
  size: propType.string,
  value: propType.string,
  onChange: propType.func,
  className: propType.string,
  placeholder: propType.string,
};
