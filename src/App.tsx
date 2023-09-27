import * as React from "react";
import { Onboarding } from "./components/Onboarding/Onboarding";

import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Planet } from "./components/Planets/planet";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Onboarding />}></Route>
        <Route path="/planet" element={<Planet />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
