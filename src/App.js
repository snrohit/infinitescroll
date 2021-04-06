import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation";
import { useSelector } from "react-redux";
import Home from "./Components/Home";
import LogIn from "./Components/LogIn";
import LogOut from "./Components/LogOut";
import { useDispatch } from "react-redux";
import { logIn } from "./Action/index";
function App() {
  const userName = localStorage.getItem("user");
  const password = localStorage.getItem("password");
  const dispatch = useDispatch();
  if (userName === "foo" && password === "bar") {
    dispatch(logIn(userName));
  }
  const User = useSelector((state) => state.User);
  return (
    <>
      <BrowserRouter>
        <Switch>
          {User.length === 0 ? 
            <>
              <Switch>
                <Route exact path="/">
                  <Navigation />
                  <LogIn />
                </Route>
              </Switch>
            </>
           : 
            <>
              <Route exact path="/LogOut">
                <Navigation />
                <LogOut />
              </Route>
              <Route exact path="/Home">
                <Navigation />
                <Home />
              </Route>
            </>
          }
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
