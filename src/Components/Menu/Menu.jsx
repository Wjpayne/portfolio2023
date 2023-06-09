import { Paper } from "@mui/material";
import React from "react";
import  SVG  from "./SVG";

const menuStyles = {
  width: { lg: "1200px", md: "900px", xs: "100%" },
  height: { lg: "700px", md: "700px", xs: "400px", sm: "700px" },
  marginTop: "10px"
  
};

export const Menu = () => {
  return (
    <Paper sx={menuStyles}>
     <SVG></SVG>
    </Paper>
  );
};
