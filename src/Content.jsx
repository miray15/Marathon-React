import { Home } from "./Home";
import { Routes, Route } from "react-router-dom";
import { Donate } from "./Donate";
import { MyStory } from "./MyStory";
// import { Thermometer } from "./Thermometer";

export function Content() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/mystory" element={<MyStory />} />
        {/* <Route path="/thermometer" element={<Thermometer />} /> */}
      </Routes>
    </div>
  );
}
