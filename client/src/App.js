import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Donations from "./pages/Donations";
import LogIn from "./pages/LogIn";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="pageContainer">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/donations" component={Donations} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path = "/nomatch" component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
