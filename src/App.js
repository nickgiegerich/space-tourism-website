import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Crew from "./views/crew/Crew";
import Destination from "./views/destination/Destination";
import Home from "./views/home/Home";
import Technology from "./views/technology/Technology";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/destination" element={<Destination/>}/>
          <Route path="/crew" element={<Crew/>}/>
          <Route path="/tech" element={<Technology/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
