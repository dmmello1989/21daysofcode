import { Routes, Route } from "react-router-dom";
import { Home } from "./scenes/Home";
import { List } from "./scenes/01-List";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<List />} />
    </Routes>
  )
};
