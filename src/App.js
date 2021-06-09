import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Registration } from "./components/Registration";
import { RegistrationList } from "./components/RegistrationList";
import { AppNavBar } from "./common/AppNavBar";
import { User } from "./components/User";
import { AppNavBar1 } from "./common/AppNavBar1";
import { MyProfile } from "./components/MyProfile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/registration">
          <AppNavBar />
          <Registration />
        </Route>

        <Route path="/login">
          <AppNavBar />
          <User />
        </Route>

        <Route path="/list-registration">
          <AppNavBar1 />
          <RegistrationList />
        </Route>

        <Route path="/home">
          <AppNavBar />
          <Registration />
        </Route>

        <Route path="/myprofile">
          <AppNavBar1 />
          <MyProfile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
