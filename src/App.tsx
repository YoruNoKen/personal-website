import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Nav from "./components/Nav";
// const Mia = lazyLoader("./routes/Mia", "Mia");
// const Home = lazyLoader("./routes/Home", "Home");
import { Home } from "./routes/Home";
import { Mia } from "./routes/Mia";

function App() {
  return (
    <Router>
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/mia"
            element={<Mia />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

function lazyLoader(path: string, exportName?: string) {
  return lazy(() => {
    const promise = import(`${path}`);
    if (exportName) {
      return promise.then((module) => ({ default: module[exportName] }));
    }
    return promise;
  });
}

export default App;
