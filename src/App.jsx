import "./App.css";
import { Content } from "./Content";
import { Header } from "./Header";
import { BrowserRouter } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

// import Subscribe from "./Subscribe";

function App() {
  const handleClick = () => {
    // implementation details
  };
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Content />

          {/* <Subscribe /> */}
          {/* <div>
            <button type="button" onClick={handleClick}>
              Subscribe here
            </button>
          </div> */}
          {/* <Signup />
          <Login />
          <LogoutLink /> */}
          {/* <Subscribe /> */}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
