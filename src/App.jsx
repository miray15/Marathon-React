import "./App.css";
import { Content } from "./Content";
import { Header } from "./Header";
import { BrowserRouter } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Subscribe } from "./Subscribe";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Content />
          {/* <Subscribe /> */}

          {/* <Signup />
          <Login />
          <LogoutLink /> */}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
