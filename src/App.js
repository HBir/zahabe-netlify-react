import React, { Component } from 'react';
import './App.css';
import NewEntry from "./components/NewEntry";
import MvList from "./components/MvList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            Minns vi den gången Zahabe...
        </header>
        <NewEntry />
        <MvList/>
      </div>
    );
  }
}

export default App;
