import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyHeader from "./components/Header/Header";
import ShowTotalCountByName from "./components/Show_total_count_by_name";
import "./App.css";
import Navigator from "./components/Navigator";

const App = () => {
  return (
    <Router>
      <MyHeader />
      <Navigator />
      <Switch>
        <Route path="/show_total_count_by_name">
          <ShowTotalCountByName />
        </Route>

        <Route path="/search_by_name_and_state">

        </Route>

        <Route path="/search_by_name_and_year">

        </Route>

        <Route path="/trends">

        </Route>

        <Route exact path="/">
          <div>home</div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;