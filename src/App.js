import React, { Component } from 'react';
import './App.css';
import NewEntry from "./components/NewEntry";
import MvList from "./components/MvList";

const mvs = [
  { id: 4987, text: "Minns vi den gången Zahabe tyckte att pjäsen var en besvikelse, då alla skådespelare bestod av små figurer, men konstaterade att det var dock teater?" },
  { id: 1, text: "Minns vi den gången Zahabe saknade kung Bhumibol?" },
];


class App extends Component {
  constructor() {
    super();
    this.state = {
      entries: [],
      loading: false
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.displayEntries = this.displayEntries.bind(this);
    // this.addTodo = this.addTodo.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch("/.netlify/functions/zahabe-entries")
      .then(response => response.json())
      .then(json => this.setState({ loading: false, entries: json }))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
            Minns vi den gången Zahabe...
        </header>
        <NewEntry />
        <MvList mvs={this.state.entries} />
      </div>
    );
  }
}

export default App;
