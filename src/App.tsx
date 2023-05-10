import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./routes/Home";
import Pledge from "./routes/Poems";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Main />}
        />
        <Route
          path="/home"
          element={<Main />}
        />
        <Route
          path="/poems"
          element={<Pledge />}
        />
      </Routes>
    </Router>
  );
}

export default App;
