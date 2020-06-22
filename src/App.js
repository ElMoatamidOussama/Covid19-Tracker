import React from "react";
import "./StyleSheet/App.css";
import HomePage from "./Components/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DashboardController from "./Components/Main/Dashboard/DashboardController";
import AboutUs from "./Components/Secondary/AbousUs";
import ContactUs from "./Components/Secondary/ContactUs";

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
        <Route
          path="/aboutUs/"
          exact
          strict
          render={() => {
            return <AboutUs />;
          }}
        />
        <Route
          path="/contactUs/"
          exact
          strict
          render={() => {
            return <ContactUs />;
          }}
        />
      </div>
    </Router>
  );
};

export default App;
