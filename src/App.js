import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Memory from "./components/pages/Memory";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";

class App extends Component {
  render() {
    return (
      <Router>
      <Fragment>
        <NavBar />
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/memory" component={Memory} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Fragment>
    </Router>
    );
  }
}

export default App;
