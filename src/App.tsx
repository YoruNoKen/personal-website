import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./routes/Home";
import Pledge from "./routes/Poems";
import Mp3 from "./routes/mp3";

import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
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
        <Route
          path="/mp3"
          element={<Mp3 />}
        />
      </Routes>
    </Router>
  );
}

export default App;
