import React, { Component } from "react";
import Loader from './Loader'
import "./NewEntry.css";

class NewEntry extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
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
        <textarea id="newEntryInput"></textarea>


        <button className="newEntryButton" onClick={this.handleClick()}>
          {loading ? 'Posting...' : '>'}
        </button>
        <br />
        {this.state.loading ? <Loader /> : null}

      </div>
    );
  }
}

export default NewEntry;
