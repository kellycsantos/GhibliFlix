import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Container from "./pages/Home";
import Details from "./pages/MovieDetails";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/movie/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
