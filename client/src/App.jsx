import React from "react";
import { Route, Routes } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import Home from "./Page/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default App;
