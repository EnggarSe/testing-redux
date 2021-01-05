import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//component
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

//pages
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Post from "./pages/Post";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/todos">
            <Todos />
          </Route>
          <Route path="/post">
            <Post />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
