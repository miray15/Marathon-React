import { Home } from "./Home";
import { Routes, Route } from "react-router-dom";
import { Donate } from "./Donate";

export function Content() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </div>
  );
}
