
import React, { Component } from "react";
import "./MvList.css";
import MvEntry from './MvEntry';
import Loader from "./Loader";


// componentDidMount() {
//   this.setState({ loading: true })
//   fetch("/.netlify/functions/zahabe-entries")
//     .then(response => response.json())
//     .then(json => this.setState({ loading: false, entries: json }))
// }

class MvList extends Component {
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
    if (this.state.loading) return <Loader />;
    return (
      <div>
        {this.state.entries.map((c, index) => <MvEntry id={c.id} text={c.text} index={this.state.entries.length-index} />)}
      </div>
    );
  }

}


export default MvList;