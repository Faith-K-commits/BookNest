import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Outlet />
    </div>
  );
}

export default App;
