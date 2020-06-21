import React from "react";
import "./StyleSheet/App.css";
import HomePage from "./Components/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DashboardController from "./Components/Main/Dashboard/DashboardController";

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
          path="/dashboard/"
          exact
          strict
          render={() => {
            return <DashboardController />;
          }}
        />
      </div>
    </Router>
  );
};

export default App;
