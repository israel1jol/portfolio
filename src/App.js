import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Navbar from "./Components/Navbar.component";
import Blog from "./Blog";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/articles" element={<Blog />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
