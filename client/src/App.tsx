import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ComingSoon from "./Pages/ComingSoon";
const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<ComingSoon />} />
      </Routes>

    </>
  )
}

export default App;
