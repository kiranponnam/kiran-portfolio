import * as React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About/about";
import NavBar from "./components/NavBar/NavBar";
function App(props: any) {
  return (
    <div className="App" id="app">
      <NavBar />
      <Router>
        <Switch>
          <Route path="/" component={About}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
