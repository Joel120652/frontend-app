import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Registration } from "./components/Registration";
import { Login } from "./components/Login";
import { RegistrationList } from "./components/RegistrationList";
import { AppNavBar } from "./common/AppNavBar";

function App() {
  return (
    <Router>
      <AppNavBar />
      <Switch>
        <Route path="/registration">
          <Registration />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/list-registration">
          <RegistrationList />
        </Route>

        <Route path="/">
          <Registration />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
