import React from "react";
import "./StyleSheet/App.css";
import HomePage from "./Components/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TableView from "./Components/Dashboard/TableView";

const App = () => {
  return (
    <Router>
      <div>
        <Route
          path="/"
          exact
          render={() => {
            return <HomePage />;
          }}
        />

        <Route
          path="/tableView/"
          exact
          strict
          render={() => {
            return <TableView />;
          }}
        />
      </div>
    </Router>
  );
};

export default App;
