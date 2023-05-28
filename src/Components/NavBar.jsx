import { AppBar, Box, Button } from "@mui/material";
import React from "react";

const navStyles = {
  color: "white",
  backgroundColor: "#012a37",
  justifyContent: "space-between",
};

export const NavBar = () => {
  const navItems = ["About Me", "Projects", "Resume", "Contact"];
  return (
    <div>
      <AppBar sx={navStyles}>
        <Box sx={{ display: "flex", justifyContent: "space-between", padding: "20px"}}>
          {navItems.map((item) => (
            <Button
              sx={{ justifyContent: "space-between", color: "white", fontSize: "15px" }}
              key={item}
            >
              {item}
            </Button>
          ))}
        </Box>
      </AppBar>
    </div>
  );
};
