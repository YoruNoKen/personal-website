import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Nav from "./components/Nav";
// import Mp3 from "./routes/mp3";
const Mom = lazyLoader("./routes/mothersday", "Mother");
const Pledge = lazyLoader("./routes/Poems", "Pledge");
const Home = lazyLoader("./routes/Home", "Home");

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
            path="/poems"
            element={<Pledge />}
          />
          <Route
            path="/mothersday"
            element={<Mom />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

function lazyLoader(path: string, exportName?: string) {
  return lazy(() => {
    const promise = import(`${path}`);
    if (!exportName) {
      return promise;
    } else {
      return promise.then((module) => ({ default: module[exportName] }));
    }
  });
}

export default App;
