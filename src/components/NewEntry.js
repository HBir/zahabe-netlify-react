import React, { Component } from "react";
import "./NewEntry.css";

class NewEntry extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null };
  }

  handleClick = api => e => {
    e.preventDefault();

    this.setState({ loading: true });
    fetch('/.netlify/functions/' + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }));
  };

  render() {
    const { loading, msg } = this.state;

    return (
      <div>
        <textarea className="newEntryInput"></textarea>

        {/* <button className="newEntryButton" onClick={this.handleClick('hello')}>
          {loading ? 'Loading...' : 'Call Lambda'}
        </button> */}
        <button className="newEntryButton" onClick={this.handleClick('async-chuck-norris')}>
          {loading ? 'Posting...' : '>'}
        </button>
        <br />

        <span>{msg}</span>

      </div>
    );
  }
}

export default NewEntry;
/*
CreateIndex(
  {
    name: "mvs_by_id",
    source: Class("mvs"),
    active: true,
    terms: [{ field: ["data", "id"] }]
  })

  */