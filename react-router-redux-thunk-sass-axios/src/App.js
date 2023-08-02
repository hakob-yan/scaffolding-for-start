// App.js (updated)
import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import * as paths from "./constants/routerPaths"

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to={paths.HOME}>Home</Link>
        </nav>
        <Routes>
          <Route path={paths.HOME} element={<Home />} />
          <Route path={paths.ALL} element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
