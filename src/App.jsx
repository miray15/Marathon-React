import "./App.css";
import { Content } from "./Content";
import { Header } from "./Header";
import { BrowserRouter } from "react-router-dom";
import { Signup } from "./Signup";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />

          <Content />
          <Signup />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
