import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNav from "./components/MyNav";
import HomeIntroduction from "./components/HomeIntroduction";
import MainSearch from "./components/MainSearch";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <HomeIntroduction />
        <MainSearch />
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
