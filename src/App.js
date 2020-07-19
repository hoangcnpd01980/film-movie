import React from "react";
import "./App.css";
import Header from "./components/Header/index";
import Menu from "./components/Menu/index";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Menu />
      </div>
    );
  }
}

export default App;
