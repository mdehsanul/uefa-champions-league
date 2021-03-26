import React from "react";
import Home from "./component/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FootballClubDetail from "./component/FootballClubDetail/FootballClubDetail";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/team/:teamId">
            <FootballClubDetail></FootballClubDetail>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
