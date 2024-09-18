import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ComingSoon from "./Components/ComingSoon";
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
