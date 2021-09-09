import React from "react";
import { HashRouter, Route } from "react-router-dom";
import MyHeader from "./components/Header/Header";
import ShowTotalCountByName from "./components/Show_total_count_by_name";
import "./App.css";
import Navigator from "./components/Navigator";
import ShowTotalCountByNameAndYear from "./components/Show_total_count_by_name_and_year";
import ShowTotalCountByNameAndState from "./components/Show_total_count_by_name_and_state";
import Trends from "./components/Trends";

const App = () => {
  return (
    <HashRouter basename="/">
      <MyHeader />
      <Navigator />

      <Route path="/show_total_count_by_name">
        <ShowTotalCountByName />
      </Route>

      <Route path="/search_by_name_and_state">
        <ShowTotalCountByNameAndState />
      </Route>

      <Route path="/search_by_name_and_year">
        <ShowTotalCountByNameAndYear />
      </Route>

      <Route path="/trends">
        <Trends />
      </Route>

      <Route exact path="/">
        <div>home</div>
      </Route>
    </HashRouter>
  )
}

export default App;