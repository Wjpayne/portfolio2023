import "./App.css";
import { Menu } from "./Components/Menu/Menu";


function App() {
  return (
    <div className="App">
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
      <Menu></Menu>
      </div>
    </div>
  );
}

export default App;
