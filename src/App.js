import { ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import { Menu } from "./Components/Menu/Menu";

const theme = createTheme({
  typography: {
    fontFamily: ["Epilogue"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme = {theme}>
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          position: "relative"
        }}
      >
        <Menu></Menu>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
