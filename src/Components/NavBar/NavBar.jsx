import { AppBar, Box, Button } from "@mui/material";
import React from "react";

const navStyles = {
  color: "white",
  backgroundColor: "#012a37",
  justifyContent: "space-between",
};

const buttonStyles = {
  justifyContent: "space-between",
  color: "white",
  fontSize: { sm: "15px", md: "20px" },
};

export const NavBar = () => {
  const navItems = ["About Me", "Projects", "Resume", "Contact"];
  return (
    <div>
      <AppBar sx={navStyles}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          {navItems.map((item) => (
            <Button sx={buttonStyles} key={item}>
              {item}
            </Button>
          ))}
        </Box>
      </AppBar>
    </div>
  );
};
