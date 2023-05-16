import { Home } from "./Home";
import { Routes, Route } from "react-router-dom";

export function Content() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}
