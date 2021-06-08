import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Registration } from "./components/Registration";
import { RegistrationList } from "./components/RegistrationList";
import { AppNavBar } from "./common/AppNavBar";
import { User } from "./components/User";

function App() {
  return (
    <Router>
      <AppNavBar />
      <Switch>
        <Route path="/registration">
          <Registration />
        </Route>

        <Route path="/login">
          <User />
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
