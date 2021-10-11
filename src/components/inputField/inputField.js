import React from "react";
import { Box, TextField } from "@material-ui/core";

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
